import * as React from 'react';

import { Modal as MuiModal } from '@mui/material';
import classnames from 'classnames';

import Crossmark from '../../assets/icons/Crossmark.svg';

import styles from './Modal.module.scss';
import generalStyles from '../../styles/Home.module.scss';

enum CloseButtonPositionEnum {
  INSIDE = 'inside',
  OUTSIDE = 'outside',
}

type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactElement;
  closePosition?: CloseButtonPositionEnum;
  disableBackdropClick?: boolean;
  disableEscClick?: boolean;
  fullWidth?: boolean;
  hideCloseButton?: boolean;
};

export default function Modal({
  open,
  closePosition,
  onClose,
  children,
  disableBackdropClick,
  disableEscClick,
  fullWidth,
  hideCloseButton,
  ...args
}: ModalProps) {
  return (
    <MuiModal
      open={open}
      {...args}
      onClose={(_, reason) => {
        if (reason === 'backdropClick' && disableBackdropClick) {
          return;
        }
        if (reason === 'escapeKeyDown' && disableEscClick) {
          return;
        }
        onClose();
      }}
    >
      <div className={styles.modalWrapper}>
        <div
          className={classnames(
            generalStyles.paddedContent,
            styles.modalContentWrapper,
          )}
        >
          {!hideCloseButton &&
            closePosition === CloseButtonPositionEnum.OUTSIDE && (
            <button
              onClick={onClose}
              className={classnames(styles.closeButton, styles.outside)}
            >
              <Crossmark />
            </button>
          )}
          <div
            className={classnames(
              styles.componentBackground,
              fullWidth && styles.fullWidth,
            )}
          >
            {!hideCloseButton &&
              (!closePosition ||
                closePosition === CloseButtonPositionEnum.INSIDE) && (
              <button
                onClick={onClose}
                className={classnames(styles.closeButton, styles.inside)}
              >
                <Crossmark />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </MuiModal>
  );
}
