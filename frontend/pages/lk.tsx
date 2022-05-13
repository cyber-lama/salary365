import React, { useState } from 'react';
import {wrapper} from '../redux/store';
import { Grid, Button, Slider } from '@mui/material';
import Link from 'next/link';
import classnames from 'classnames';

import RegisterSuccessModal from '../components/Modals/RegisterSuccessModal';
import TextInput from '../components/TextInput/TextInput';

import Modal from '../components/Modal/Modal';
import TransactionDetailsModal from '../components/Modals/TransactionDetailsModal';

import {useUserProfile} from '../redux/hooks/profile';
import {useBalance} from '../redux/hooks/finance';

import { fetchUserProfile } from '../redux/actions/profile';
import { fetchBalance, withdrawPayment } from '../redux/actions/finance';

import SettingsIcon from '../assets/icons/Settings.svg';

import styles from '../styles/Lk.module.scss';
import homeStyles from '../styles/Home.module.scss';
import { useDispatch } from 'react-redux';


type LkProps = {
  activated: boolean;
  userData: {
    email: string;
    name: string;
  };
};

function withPreloader(value) {
  if (!value) {
    return <span className='preloader' />;
  }

  return value;
}

function Lk({ activated = true}: LkProps) {
  const dispatch = useDispatch();  
  
  const [sum, setSum] = useState(0);
  const [isConfirmOpen, setConfirmOpen] = useState(false);

  const userProfile = useUserProfile();
  const balance = useBalance();

  // if (!userProfile.data || !balance.data)
  //   // add prerender 
  //   return;


  const confirmWithdrawal = async () => {
    await dispatch(withdrawPayment(sum));
    setConfirmOpen(false);
  };

  return !activated ? (
    <Grid container>
      <Grid item xs={0} md={2}></Grid>
      <Grid item xs={0} md={8}>
        <RegisterSuccessModal email={userProfile.data?.email || 'loading'} />
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </Grid>
  ) : (
    <>
      <Modal
        open={isConfirmOpen}
        onClose={() => {
          setConfirmOpen(false);
        }}
        disableBackdropClick
      >
        <TransactionDetailsModal
          fee={99}
          totalSum={sum}
          onConfirm={confirmWithdrawal}
          loading={balance.loading}
        />
      </Modal>
      <Grid
        container
        className={styles.wrapper}
        columnSpacing={{ md: 3, lg: 5 }}
        rowSpacing={2.5}
      >
        <Grid item xs={12} md={6}>
          <div className={classnames(styles.userData, homeStyles.card)}>
            <Grid
              container
              item
              xs={12}
              md={9}
              alignItems="flex-start"
              flexWrap="unset"
            >
              <h2 className={styles.userName}>
                {
                  withPreloader(userProfile.data && `${userProfile.data?.fname} ${userProfile.data?.lname}`)
                  // userProfile.data ? `${userProfile.data?.fname} ${userProfile.data?.lname}` : 'loading'
                }
              </h2>
              <Link href="/personalData" passHref>
                <Button className={styles.settingsBtn}>
                  <SettingsIcon />
                </Button>
              </Link>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} sm={6}>
                <div>Доступно</div>
                <div className={styles.availableSum}>
                  <span>{balance.data.balance}</span>
                  <span className={styles.decimals}>.78 ₽</span>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className={styles.additionalSalaryInfo}>
                <div>20 000 ₽ Размер оклада</div>
                <div>14 500.78 ₽ Начислено с 1 по 15 апреля</div>
                <div>0 ₽ Получено с 1 по 15 апреля</div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.payoutData}>
            <TextInput
              label="Введите сумму для снятия"
              fullWidth
              value={`${sum}`}
              color="secondary"
              onChange={(e) => setSum(+e.target.value)}
              inputProps={{
                className: styles.sumInput,
              }}
            />
            <Slider
              sx={{ marginTop: '10px' }}
              min={0}
              max={1440178}
              value={sum * 100}
              step={100}
              onChange={(e,value: number) => setSum(+(value / 100).toFixed(2))}
            />
            <Grid
              container
              justifyContent="space-between"
              sx={{ marginBottom: '10px' }}
            >
              <Grid item>100 ₽</Grid>
              <Grid item>14401 ₽</Grid>
            </Grid>
            <div>*Комиссии за перевод: 99 ₽ </div>
          </div>
        </Grid>
        <Grid item xs={0} md={6} className={styles.onlyNotMobile} />
        <Grid item xs={12} md={4}>
          <Button variant="outlined" fullWidth disabled={!sum} onClick={()=> {setConfirmOpen(true);}}>
          Перевести
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(store => () => {
  const profile = store.getState().profile;
  const balance = store.getState().finance.balance;
  if (!profile.data) {
    store.dispatch(fetchUserProfile());
  }
  if (!balance.data) {
    store.dispatch(fetchBalance());
  }
});

export default Lk;