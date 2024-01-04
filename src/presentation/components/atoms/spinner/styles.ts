import styled, { keyframes } from 'styled-components';

// Keyframes para la animación del spinner
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilos para el componente Spinner
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SpinnerElement = styled.div`
  width: 40px;
  height: 40px;
  border: 8px solid #ccc;
  border-top-color: #af1212;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

export { SpinnerWrapper, SpinnerElement };
