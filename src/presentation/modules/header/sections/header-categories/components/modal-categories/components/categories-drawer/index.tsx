import React, { useEffect, useState } from 'react';
import { DrawerContainer, DrawerContent } from './style';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const CategoriesDrawer = ({ children, onClose, isOpen }: Props) => {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = startX - endX;
    if (swipeDistance < 50) {
      onClose();
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('keydown', handleKeyPress);
      document.body.classList.add('header-footer-open-modal');
    } else {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyPress);
      document.body.classList.remove('header-footer-open-modal');
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyPress);
      document.body.classList.remove('header-footer-open-modal');
    };
  }, [isOpen]);

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement | MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <DrawerContainer onClick={() => onClose()}>
      <DrawerContent onClick={handleContentClick}>{children}</DrawerContent>
    </DrawerContainer>
  );
};

export default CategoriesDrawer;
