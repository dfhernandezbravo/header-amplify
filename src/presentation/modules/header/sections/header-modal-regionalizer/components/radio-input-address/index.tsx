import { RadioCheck, RadioInput, RadioLabel, RadioWrapper } from './styles';

interface Props {
  text: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

const RadioButtonAddress = ({ text, checked, onChange, value }: Props) => {
  return (
    <RadioLabel>
      <div>
        <RadioWrapper checked={checked}>
          <RadioCheck checked={checked} />
        </RadioWrapper>
      </div>
      <RadioInput
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      {text}
    </RadioLabel>
  );
};

export default RadioButtonAddress;
