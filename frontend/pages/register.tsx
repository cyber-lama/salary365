import React, { useState } from 'react';
import { Grid, FormControlLabel, Link, Checkbox, Button } from '@mui/material';
import Select from '../components/Select/Select';
import TextInput from '../components/TextInput/TextInput';
import Modal from '../components/Modal/Modal';
import PersonalDataDetailsModal from '../components/Modals/PersonalDataDetailsModal';
import PrivacyPolicyModal from '../components/Modals/PrivacyPolicyModal';

// import styles from '../styles/Register.module.scss';

const options = [
  {
    value: 1,
    label: 'ООО "ФИНБРИДЖ"',
    description: '6162069688, г Ростов-на-Дону, ул Портовая, д 193, офис 308',
  },
  // {
  //   value: 2,
  //   label: 'ООО "ФИНБРИДЖ"',
  //   description: '6162069688, г Ростов-на-Дону, ул Портовая, д 193, офис 308',
  // },
  {
    value: 3,
    label: 'good first issue',
    description: 'Good for newcomers',
  },
  // {
  //   value: 4,
  //   label: 'good first issue',
  //   description: 'Good for newcomers',
  // },
  {
    value: 5,
    label: 'ООО "ФИНМИЛИТАРС"',
    description:
      '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  },
  // {
  //   value: 6,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
  // {
  //   value: 5,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
  // {
  //   value: 6,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
  // {
  //   value: 5,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
  // {
  //   value: 6,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
  // {
  //   value: 5,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
  // {
  //   value: 6,
  //   label: 'ООО "ФИНМИЛИТАРС"',
  //   description:
  //     '6162069688, г Москва, пр-кт Вернадского, д 37 к 2, помещ I ком 23',
  // },
];

type EmployerOptions = {
  value: number;
  label: string;
  description: string;
};

export default function Register() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [privacyRead, setPrivacyRead] = useState(false);
  
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [snils, setSnils] = useState('');
  const [privacyAgree, setPrivacyAgree] = useState(false);
  
  const [employerValue, setEmployerValue] =
    React.useState<EmployerOptions | null>(null);
  const [employerInputValue, setEmployerInputValue] = React.useState('');

  const handleRegister = () => {
    setModalOpen(true);
  };

  const handlePrivacyPolicyClick = () => {
    setPrivacyModalOpen(true);
  };

  return (
    <>
      <h2 className="centered">Регистрация</h2>
      <Grid container rowSpacing={4}>
        <Grid item xs={0} md={2} />
        <Grid item container spacing={2.5} justifyContent="left" xs={12} md={8}>
          <Grid item xs={12} md={6}>
            <TextInput
              placeholder="mail@mail.ru"
              label="Электронная почта"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              placeholder="+7 900 555-55-55"
              label="Номер телефона"
              mask
              fullWidth
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Select
              placeholder='ООО "ФИНБРИДЖ"'
              label="Работодатель"
              fullWidth
              noOptionsText="Работодатель не найден"
              value={employerValue}
              onChange={(event: any, newValue: EmployerOptions | null) => {
                setEmployerValue(newValue || null);
              }}
              inputValue={employerInputValue}
              onInputChange={(event, newInputValue) => {
                setEmployerInputValue(newInputValue);
              }}
              options={options}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              placeholder="342-665-329-09"
              label="СНИЛС"
              fullWidth
              value={snils}
              onChange={(e) => {
                setSnils(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              onClick={!privacyRead ? handlePrivacyPolicyClick : null}
              className="formControl checkbox"
              control={
                <Checkbox 
                  size="small"
                  disabled={!privacyRead}
                  checked={privacyAgree}
                  onChange={(e)=>{ setPrivacyAgree(e.target.checked); }}
                />
              }
              label={
                <>
                  Я соглашаюсь{' '}
                  <Link onClick={handlePrivacyPolicyClick}>
                    с политикой в отношении обработки персональных данных
                  </Link>
                </>
              }
            />
          </Grid>
          <Grid item xs={0} md={3} />
          <Grid item container justifyContent="center" md={6}>
            <Button variant="contained" onClick={handleRegister} fullWidth>
              Зарегистрироваться
            </Button>
          </Grid>
          <Grid item xs={0} md={3} />
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        disableBackdropClick
      >
        <PersonalDataDetailsModal
          email={email}
          phone={phone}
          snils={snils}
          employer={employerValue?.label}
        />
      </Modal>
      <Modal
        fullWidth
        open={isPrivacyModalOpen}
        onClose={() => {
          setPrivacyModalOpen(false);
        }}
        disableBackdropClick
        disableEscClick
        hideCloseButton
      >
        <PrivacyPolicyModal
          onClose={() => {
            setPrivacyModalOpen(false);
          }}
          onSubmit={() => {
            setPrivacyRead(true);
            setPrivacyAgree(true);
          }}
        />
      </Modal>
    </>
  );
}
