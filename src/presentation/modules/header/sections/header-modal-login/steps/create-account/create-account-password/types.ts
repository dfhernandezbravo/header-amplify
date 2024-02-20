export type PasswordFormat = {
  hasLowercase: {
    text: string;
    isValid: boolean;
  };
  hasUppercase: {
    text: string;
    isValid: boolean;
  };
  hasMinLength: {
    text: string;
    isValid: boolean;
  };
  hasNumber: {
    text: string;
    isValid: boolean;
  };
};

export const passwordFormat: PasswordFormat = {
  hasLowercase: {
    text: 'Contiene minúsculas',
    isValid: false,
  },
  hasUppercase: {
    text: 'Contiene mayúsculas',
    isValid: false,
  },
  hasMinLength: {
    text: 'Mínimo 8 caracteres',
    isValid: false,
  },
  hasNumber: {
    text: 'Contiene números',
    isValid: false,
  },
};
