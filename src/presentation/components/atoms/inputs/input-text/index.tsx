import React from 'react';
import InputBase, { InputBaseProps } from '../input-base';

interface Props extends InputBaseProps {}

const InputText: React.FC<Props> = (props) => {
  return <InputBase {...props} />;
};

export default InputText;
