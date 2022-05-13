import React from 'react';
import Lottie from 'react-lottie';
import { Grid, Button } from '@mui/material';

import animationData from '../../assets/animations/congrat_anim.json';
const lottieOptions = {
  animationData,
  loop: true,
  autoplay: true,
};

export default function PersonalDataModal() {
  return (
    <Grid container rowSpacing={0}>
      <Grid item xs={2} />
      <Grid container item xs={8}>
        <Grid item className="centered">
          <Lottie options={lottieOptions} width={130} height={130} />
          <h2 className="modalHeader">Поздравляем</h2>
        </Grid>
        <Grid item>
          <div className="modalText centered">
            Вы зарегистрировались в Зарплата 365.
          </div>
        </Grid>
        <Grid item>
          <div className="modalText centered">
            Следуйте инструкции для активации учётной записи.
          </div>
        </Grid>
        <Grid item xs={12} md={8} className="centered">
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              console.log('personal data modal btn clck');
            }}
          >
            Отлично
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}
