import React from 'react';
import { Grid, Button } from '@mui/material';

import styles from './TransactionDetailsModal.module.scss';

type TransactionDetailsProps = {
  totalSum: number;
  fee: number;
  onConfirm: () => void
  loading?: boolean
};

const getFormattedPrice = (amount: number): string => {
  return `${amount.toLocaleString()} ₽`;
};

export default function TransactionDetailsModal({
  totalSum,
  fee,
  onConfirm,
  loading
}: TransactionDetailsProps) {
  return (
    <Grid container rowSpacing={0}>
      <Grid item xs={12}>
        <h2 className="modalHeader centered">Подтверждение операции</h2>
      </Grid>
      <Grid item xs={1} />
      <Grid container item xs={10}>
        <Grid item container className={styles.row}>
          <Grid item xs={8}>
            Поступит на карту
          </Grid>
          <Grid item xs={4} className={styles.price}>
            {getFormattedPrice(totalSum - fee)}
          </Grid>
        </Grid>
        <Grid item container className={styles.row}>
          <Grid item xs={8}>
            Комиссия за перевод
          </Grid>
          <Grid item xs={4} className={styles.price}>
            {getFormattedPrice(fee)}
          </Grid>
        </Grid>
        <Grid item container className={styles.row}>
          <Grid item xs={8}>
            Будет списанно со счета
          </Grid>
          <Grid item xs={4} className={styles.price}>
            {getFormattedPrice(totalSum)}
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} className={`centered ${styles.button}`}>
          <Button
            variant="contained"
            fullWidth
            onClick={onConfirm}
            disabled={loading}
          >
            Подтверждаю
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
