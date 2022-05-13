import React, { useState } from 'react';

import { Autocomplete, Popper } from '@mui/material';

import TextInput from '../TextInput/TextInput';

import styles from './Select.module.scss';

const CustomPopper = function (props) {
  return <Popper {...props} className={styles.autocompleteListbox} />;
};

// eslint-disable-next-line react/display-name
const CustomListbox = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLElement>
>((listboxProps, listboxRef) => {
  return (
    <>
      <div className={styles.listboxHelperText}>
        <div className={styles.text}>Выберите вариант или продолжите ввод</div>
      </div>
      <ul ref={listboxRef} {...listboxProps} />
    </>
  );
});

const CustomOptionRender = function (props, option) {
  return (
    <li {...props}>
      <div className={styles.optionMain}>{option.label}</div>
      {option.description && (
        <div className={styles.optionAdditional}>{option.description}</div>
      )}
    </li>
  );
};

export default function Select(selectProps) {
  return (
    <Autocomplete
      {...selectProps}
      renderInput={(params) => (
        <TextInput
          {...params}
          label={selectProps?.label}
          placeholder={selectProps?.placeholder}
          fullWidth={selectProps?.fullWidth}
        />
      )}
      getOptionLabel={(option) => option.label}
      PopperComponent={CustomPopper}
      ListboxComponent={CustomListbox}
      renderOption={CustomOptionRender}
    />
  );
}
