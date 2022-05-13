import * as React from 'react';
import Link from 'next/link';
import { Button, Grid } from '@mui/material';

import styles from '../styles/Main.module.scss';

export default function Index() {
  return (
    <Grid container className={styles.mainBlock}>
      <Grid item xs={12} md={6} className={styles.mainFeatures}>
        <h1>Получайте зарплату в любой удобный день недели</h1>
        <ol className={styles.steps}>
          <li>Зарегистрируйся;</li>
          <li>Заполни заявление для бухгалтерии;</li>
          <li>Получи зарплату уже сегодня.</li>
        </ol>
        <Grid
          container
          className={styles.authButtons}
          columnSpacing={2}
          rowSpacing={2.5}
        >
          <Grid item xs={12} md="auto">
            <Link href="/login" passHref>
              <Button color="primary" variant="contained" fullWidth>
                Войти
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md="auto">
            <Link href="/register" passHref>
              <Button color="secondary" variant="outlined" fullWidth>
                Регистрация
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={0} md={6} className={styles.mainImage} />
    </Grid>
  );
}
