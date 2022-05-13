import React from 'react';
import Lottie from 'react-lottie';
import { Grid, Button } from '@mui/material';

import animationData from '../../assets/animations/letter_anim.json';
const lottieOptions = {
  animationData,
  loop: true,
  autoplay: true,
};

type RegisterSuccessModalProps = {
  email: string;
};

export default function RegisterSuccessModal({
  email,
}: RegisterSuccessModalProps) {
  return (
    <Grid container rowSpacing={0}>
      <Grid container item xs={12} sm={8} className="centered">
        <Grid item xs={12} className="centered">
          <Lottie options={lottieOptions} width={130} height={130} />
          <h2 className="modalHeader">Вы зарегистрированы</h2>
        </Grid>
        <Grid item xs={12} className="centered">
          <div className="modalText">
            На адрес <b>{email}</b>
            <br />
            отправлен пакет документов.
          </div>
        </Grid>
        <Grid item xs={12} className="centered">
          <div className="modalText">
            Для активации вашей учетной записи, заполните и передайте документы
            в отдел бухгалтерии своего работадателя.
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className="centered">
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              console.log('logout btn clck');
            }}
          >
            Выйти
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
