import React from 'react';
import { InputBaseProps } from '../input-base';
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  InputWrapper,
} from './styles';
import { ErrorMessage } from '../input-base/styles';

interface Props {
  checked: boolean;
  label: string | React.ReactNode;
  errorMessage?: string;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputCheckbox: React.FC<Props> = ({
  checked,
  onChange,
  label,
  error,
  errorMessage,
}) => {
  return (
    <CheckboxContainer>
      <InputWrapper>
        <CheckboxInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
          hasError={error!}
        />

        <CheckboxLabel>{label}</CheckboxLabel>
      </InputWrapper>
      {error && <ErrorMessage>{errorMessage} </ErrorMessage>}
    </CheckboxContainer>
  );
};

export default InputCheckbox;
