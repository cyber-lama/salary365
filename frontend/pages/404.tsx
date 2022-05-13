import React from 'react';
import { Grid } from '@mui/material';

import styles from '../styles/404.module.scss';

export default function NotFound() {
  return (
    <Grid container justifyContent="center">
      <Grid item 
        textAlign="center" 
        sx={{
          marginTop: {xs: '0px', sm: '70px'},
        }}
      >
        <Grid container
          flexDirection="column"
          justifyContent="center"
          className={styles.errorWrapper}
        >
          <h1 className={styles.errorCode}>404</h1>
          <span className={styles.errorText}>Страница не найдена</span>
        </Grid>
      </Grid>
    </Grid>
  );
}