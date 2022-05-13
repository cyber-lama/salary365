import React from 'react';
import classnames from 'classnames';

import styles from './FieldValue.module.scss';

type FieldValueProps = {
  label: string;
  value: string;
  nowrap?: boolean;
};

export default function FieldValue({ label, value, nowrap }: FieldValueProps) {
  return (
    <>
      <div className={styles.label}>{label}</div>
      <div className={classnames(styles.value, nowrap && styles.nowrap)}>
        {value}
      </div>
    </>
  );
}
