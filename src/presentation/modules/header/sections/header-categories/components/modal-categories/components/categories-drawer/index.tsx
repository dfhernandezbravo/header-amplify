import React, { useEffect } from 'react';
import { DrawerContainer, DrawerContent, Opacity, BlockScroll } from './style';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const CategoriesDrawer = ({ children, onClose, isOpen }: Props) => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    } else {
      document.removeEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen]);

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement | MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <DrawerContainer isOpen={isOpen}>
      <BlockScroll isOpen={isOpen} />
      <DrawerContent onClick={handleContentClick}>{children}</DrawerContent>
      <Opacity onClick={() => onClose()} />
    </DrawerContainer>
  );
};

export default CategoriesDrawer;
