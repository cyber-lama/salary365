import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import { Link as MuiLink } from '@mui/material';

import Logo from '../Logo/Logo';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.paddedContent}>
        <div className={styles.footerMainBlock}>
          <div className={styles.footerLogo}>
            <Logo fillText />
            <span className={styles.helpText}>
              Получайте зарплату, когда захотите{' '}
            </span>{' '}
          </div>
          {/* <div className={styles.footerContacts}>
            <div className={styles.footerPhone}>
              <a href="tel: 8 800 700 43 48">8 800 700 43 48</a>
            </div>
            <span className={styles.helpText}>
              Звонок по России бесплатный{' '}
            </span>
          </div> */}
          <div className={styles.footerContacts}>
            <div className={styles.footerEmail}>
              <a href="mailto: help@zp365.ru">help@zp365.ru</a>
            </div>
            <span className={styles.helpText}>Служба поддержки </span>
          </div>
        </div>
        <div className={styles.legalNotice}>
          © 2011-2022 Зарплата 365. Настоящий сайт принадлежит и управляется ООО «МИКФИНАНС ПЛЮС»
          (ОГРН 1126194010700, ИНН 6168061967) 344091, Ростовская обл., г. Ростов-на-Дону,
          ул. Малиновского, д. 3, к. Д, кв. 16.
          <br/>
          Общество ведет свою деятельность на территории и в соответствии с законодательством 
          Российской Федерации.
          <br/>
          <Link href="/privacy" passHref>
            <MuiLink>Политика в отношении обработки персональных данных</MuiLink>
          </Link>
        </div>
      </div>
    </footer>
  );
}
