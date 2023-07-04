import React, { useEffect } from 'react';
import { ModalContent, ModalWrapper } from './style';
import { useAppDispatch } from '@hooks/storeHooks';
import { closeModalLogin } from '@store/login/slices/login-slice';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add('header-footer-open-modal');
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.body.classList.remove('header-footer-open-modal');
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.body.classList.remove('header-footer-open-modal');
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper onClick={() => dispatch(closeModalLogin())}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
