import { useState } from 'react';
import CreateAccountContext, { FormValues } from './create-account-context';

interface Props {
  children: React.ReactNode;
}

const initialState: FormValues = {
  email: '',
  password: '',
  accessKey: '',
};

const CreateAccounContextState = ({ children }: Props) => {
  const [createAccountValues, setCreateAccountValues] =
    useState<FormValues>(initialState);

  const handleFormValues = (values: FormValues) => {
    console.log('value from handle: ', values);
    setCreateAccountValues(values);
  };

  return (
    <CreateAccountContext.Provider
      value={{
        formValues: createAccountValues,
        handleFormValues,
      }}
    >
      {children}
    </CreateAccountContext.Provider>
  );
};

export default CreateAccounContextState;
