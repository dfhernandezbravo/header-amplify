import { RadioInput, RadioLabel } from './styles';

interface Props {
  text: string;
  state: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

const RadioButtonAddress = ({
  text,
  state,
  checked,
  onChange,
  value,
}: Props) => {
  return (
    <RadioLabel isChecked={checked}>
      <RadioInput
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <div>
        <p className="text">{text}</p>
        <p className="state-text">{state}</p>
      </div>
    </RadioLabel>
  );
};

export default RadioButtonAddress;
