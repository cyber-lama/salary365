import React from 'react';
import { Grid, Button } from '@mui/material';

import FieldValue from '../FieldValue/FieldValue';

type PersonalDataDetailsDetailsProps = {
  email: string;
  phone: string;
  snils: string;
  employer: string;
};

export default function PersonalDataDetailsModal({
  email,
  phone,
  snils,
  employer,
}: PersonalDataDetailsDetailsProps) {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <h2 className="modalHeader">Проверьте корректность данных </h2>
      </Grid>
      <Grid item xs={12} md={7}>
        <FieldValue label="Электронная почта" value={email} nowrap />
      </Grid>
      <Grid item xs={12} md={5}>
        <FieldValue label="Номер телефона" value={phone} nowrap />
      </Grid>
      <Grid item xs={12}>
        <FieldValue label="СНИЛС" value={snils} />
      </Grid>
      <Grid item xs={12}>
        <FieldValue label="Работодатель" value={employer} />
      </Grid>
      <Grid item sx={{ marginInline: { xs: 'auto', sm: 0 } }}>
        <Button
          sx={{
            marginTop: { sm: '30px' },
          }}
          variant="contained"
          onClick={() => {
            console.log('Personal data confirm modal btn clck');
          }}
        >
          Всё верно
        </Button>
      </Grid>
    </Grid>
  );
}
