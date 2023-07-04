import React from 'react';
import { ButtonInputPassword } from './styles';
import InputBase, { InputBaseProps } from '../input-base';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface Props extends InputBaseProps {}

const InputPassword: React.FC<Props> = (props) => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <InputBase
      {...props}
      type={isShowPassword ? 'text' : 'password'}
      rightAddon={
        <ButtonInputPassword
          onClick={() => setIsShowPassword(!isShowPassword)}
          type="button"
        >
          {isShowPassword ? (
            <AiOutlineEye size={20} />
          ) : (
            <AiOutlineEyeInvisible size={20} />
          )}
        </ButtonInputPassword>
      }
    />
  );
};

export default InputPassword;
