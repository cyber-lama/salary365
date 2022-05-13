import React from 'react';
import themeOptions from '../theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';

const theme1 = createTheme(themeOptions as ThemeOptions);

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme1}>
      <div className={styles.pageWrapper}>
        <div
          className={classNames(styles.contentWrapper, styles.paddedContent)}
        >
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
