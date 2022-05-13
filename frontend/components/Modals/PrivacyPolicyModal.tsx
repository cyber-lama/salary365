import React from 'react';
import { Button } from '@mui/material';

import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

type PrivacyPolicyModalProps = {
  onClose: () => void;
  onSubmit: () => void;
};

export default function PrivacyPolicyModal({
  onClose,
  onSubmit,
}: PrivacyPolicyModalProps) {
  return (
    <div className="modalText">
      <PrivacyPolicy />
      <Button onClick={onClose} sx={{ marginRight: '20px' }}>
        Назад
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          onSubmit();
          onClose();
        }}
      >
        Согласен (-на)
      </Button>
    </div>
  );
}
