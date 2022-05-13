import React, { useId } from 'react';

import { TextField, TextFieldProps } from '@mui/material';
import MaskedInput from 'react-text-mask';

import styles from './TextInput.module.scss';

// eslint-disable-next-line react/display-name
const MaskedInputCustom = React.forwardRef<HTMLElement>((props, _innerRef) => {
  return (
    <MaskedInput
      {...props}
      mask={[
        '+',
        '7',
        ' ',
        // '(',
        /[1-9]/,
        /\d/,
        /\d/,
        // ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
      guide={false}
      showMask
    />
  );
});

type TextInputProps = {
  mask?: boolean;
  label?: string;
  labelReserved?: boolean;
} & TextFieldProps;

export default function TextInput({
  mask,
  label,
  labelReserved,
  ...restProps
}: TextInputProps) {
  const id = useId();

  return (
    <>
      {(labelReserved || label) && (
        <label className={styles.label} htmlFor={id}>
          {label || ''}
        </label>
      )}
      {mask ? (
        <TextField
          id={id}
          {...restProps}
          InputProps={{
            inputComponent: MaskedInputCustom,
            inputProps: {},
          }}
        />
      ) : (
        <TextField {...restProps} id={id} />
      )}
    </>
  );
}
