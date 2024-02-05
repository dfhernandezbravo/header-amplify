import { createContext } from 'react';

export interface FormValues {
  email: string;
  password: string;
  accessKey: string;
}

interface CreateAccountContextProps {
  formValues: FormValues;
  handleFormValues: (values: FormValues) => void;
}

const CreateAccountContext = createContext<CreateAccountContextProps>({
  formValues: {
    email: '',
    password: '',
    accessKey: '',
  },
  handleFormValues: () => {},
});

export default CreateAccountContext;
