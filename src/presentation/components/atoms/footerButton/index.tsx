import { ButtonStyle } from './footerButton.styles';
import { ButtonProps } from './footerButton.types';

const Button = (props: ButtonProps) => {
  const { onClick, children, disabled, type, block } = props;

  return (
    <ButtonStyle
      disabled={disabled}
      onClick={onClick}
      className={block ? 'block' : ''}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
