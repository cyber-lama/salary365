import React from 'react';
import { Grid} from '@mui/material';

import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';

export default function PersonalData() {
  return (
    <Grid container 
      justifyContent="center"
    >
      <Grid item xs={12} md={10}>
        <PrivacyPolicy />
      </Grid>
    </Grid>
  );
}
