import * as React from 'react';
import Link from 'next/link';

import LogoIcon from '../../assets/icons/Logo.svg';
import classNames from 'classnames';
import styles from '../../styles/Home.module.scss';

type LogoProps = {
  active?: boolean;
  fillText?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const renderLogo = (fillText) => (
  <>
    <LogoIcon />
    <span className={classNames(styles.logoText, fillText && styles.filled)}>
      Зарплата 365
    </span>
  </>
);

export default function Logo({ active, size, fillText }: LogoProps) {
  return (
    <div
      className={classNames(styles.logo, size ? styles[size] : styles['md'])}
    >
      {!active && renderLogo(fillText)}
      {active && (
        <Link href="/">
          <a>{renderLogo(fillText)}</a>
        </Link>
      )}
    </div>
  );
}
