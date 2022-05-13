import React from 'react';
import {wrapper} from '../redux/store';
import { Grid, Button, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

import FieldValue from '../components/FieldValue/FieldValue';
import {useUserProfile, useBalance} from '../redux/hooks/profile';
import { fetchUserProfile } from '../redux/actions/profile';

import classnames from 'classnames';

import styles from '../styles/PersonalData.module.scss';
import homeStyles from '../styles/Home.module.scss';

function PersonalData() {
  const userProfile = useUserProfile();
  // const balance = useBalance();

  if (!userProfile.data)
    return;

  const {email, fname, lname, company_name, bik} = userProfile.data;

  return (
    <Grid
      container
      className={classnames(homeStyles.card, styles.userData)}
      rowSpacing={{ xs: 2, md: 4 }}
    >
      <Grid item xs={12} className={styles.headerWraper}>
        <div className={styles.breadcrumb}>Личные данные</div>
        <h2 className={styles.username__header}>{`${fname} ${lname}`}</h2>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnSpacing={{ xs: 4, md: 5 }} rowSpacing={2.5}>
          <Grid item>
            <FieldValue label="Номер телефона" value={'+7 955 777 00 00'} />
          </Grid>
          <Grid item>
            <FieldValue label="Снилс" value={bik} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid item container columnSpacing={{ xs: 4, md: 5 }} rowSpacing={2.5}>
          <Grid item>
            <FieldValue label="Электронная почта" value={email} />
          </Grid>
          <Grid item>
            <FieldValue label="Работодатель" value={company_name} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={{ xs: 2.5, md: 5 }} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link href="/lk" passHref>
              <Button variant="contained" fullWidth>
                Назад
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            Для изменения данных учетной записи, пожалуйста обратитесь в службу
            технической поддержки.{' '}
            <MuiLink href="mailto: help@dengisrazy.ru">
              help@dengisrazy.ru
            </MuiLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(store => () => {
  const profile = store.getState().profile;
  if (!profile.data) {
    store.dispatch(fetchUserProfile());
  }
});

export default PersonalData;