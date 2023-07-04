import React, { ReactNode } from 'react';
import {
  ErrorMessage,
  InputAddon,
  InputContainer,
  InputElement,
  InputLabel,
  InputWrapper,
} from './styles';

export interface InputBaseProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errorMessage?: string;
  error?: boolean;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

const InputBase: React.FC<InputBaseProps> = ({
  label,
  errorMessage,
  error,
  leftAddon,
  rightAddon,
  ...rest
}) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}

      <InputWrapper error={error}>
        {leftAddon && <InputAddon>{leftAddon}</InputAddon>}

        <InputElement {...rest} ref={null} />

        {rightAddon && <InputAddon>{rightAddon}</InputAddon>}
      </InputWrapper>

      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default InputBase;
