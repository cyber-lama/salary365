import React, { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import { Button, Link } from '@mui/material';
import classnames from 'classnames';

import TextInput from '../components/TextInput/TextInput';
import styles from '../styles/Login.module.scss';

const INITIAL_SECONDS_COUNT = 59;

export default function Login() {
  const [phoneVerification, setPhoneVerification] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const getSecondsString = useCallback((seconds: number): string => {
    return seconds >= 10 ? seconds.toString() : '0' + seconds;
  }, []);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNextStep = () => {
    // validate phone first
    console.log('check phone ' + phone);
    if (phone.replace(/[\s-]/gi, '').length < 12) {
      setPhoneError('Некорректный номер');
    } else {
      setPhoneError('');
      setPhoneVerification(true);
      setSeconds(INITIAL_SECONDS_COUNT);
    }
  };
  const handleCodeVerification = () => {
    // check if code is valid
    console.log('check code ' + code);
    Router.push('/lk');
  };

  const resendCode = () => {
    console.log('resend code for ' + phone);
    setSeconds(INITIAL_SECONDS_COUNT);
  };

  return (
    <div className="centered">
      {!phoneVerification && (
        <>
          <h2>Войдите чтобы продолжить</h2>
          <div className={styles.loginStepContainer}>
            <TextInput
              label="Номер телефона"
              color="primary"
              variant="outlined"
              placeholder="+7 956 678 65 45"
              defaultValue={phone || '+'}
              helperText={phoneError}
              error={Boolean(phoneError)}
              mask
              fullWidth
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div
            className={classnames(
              styles.loginStepContainer,
              styles.stepConfirmButton,
            )}
          >
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleNextStep}
            >
              Получить код
            </Button>
          </div>
        </>
      )}

      {phoneVerification && (
        <>
          <h2>Введите код</h2>
          <div
            className={classnames(
              styles.loginStepContainer,
              styles.codeSendBlock,
            )}
          >
            Мы отправили код потверждения на номер {phone}
            <Link
              className={styles.changePhoneLink}
              component="button"
              onClick={() => {
                setPhoneVerification(false);
              }}
            >
              Изменить
            </Link>
          </div>
          <div className={styles.loginStepContainer}>
            <TextInput
              label="SMS-код"
              color="primary"
              variant="outlined"
              placeholder=""
              fullWidth
              autoFocus
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <div className={styles.resendCode}>
              <span>
                <Link
                  component="button"
                  disabled={Boolean(seconds)}
                  onClick={resendCode}
                >
                  Отправить повторно
                </Link>
              </span>
              <span>{`00:${getSecondsString(seconds)}`}</span>
            </div>
          </div>
          <div
            className={classnames(
              styles.loginStepContainer,
              styles.stepConfirmButton,
            )}
          >
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleCodeVerification}
            >
              Войти
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
