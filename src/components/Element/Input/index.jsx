import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
