import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from '../../styles/Home.module.scss';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense" disableGutters className={styles.headerToolbar}>
        <Typography noWrap component="div" sx={{ flexGrow: 1 }}>
          <Logo fillText size="lg" active />
        </Typography>
        <div>1111</div>
      </Toolbar>
    </AppBar>
  );
}
