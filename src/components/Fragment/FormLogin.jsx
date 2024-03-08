import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input";

export const FormLogin = () => {
  return (
    <form className="flex flex-col gap-5">
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="6+ password"
      />
      <Button classname="bg-[#635BFF] w-full">Login</Button>
    </form>
  );
};
