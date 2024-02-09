import { PasswordFormat } from '../types';

const inputValidator = (value: string, validateInput: PasswordFormat) => {
  const hasLowercase = /[a-z]/.test(value);
  const hasUppercase = /[A-Z]/.test(value);
  const hasMinLength = value.length >= 8;
  const hasNumber = /\d/.test(value);

  const newValidateInput: PasswordFormat = {
    hasLowercase: { ...validateInput.hasLowercase, isValid: hasLowercase },
    hasUppercase: { ...validateInput.hasUppercase, isValid: hasUppercase },
    hasMinLength: { ...validateInput.hasMinLength, isValid: hasMinLength },
    hasNumber: { ...validateInput.hasNumber, isValid: hasNumber },
  };

  return newValidateInput;
};

export default inputValidator;
