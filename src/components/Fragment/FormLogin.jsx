import { useEffect, useRef, useState } from "react";
import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input";
import { login } from "../../services/auth.services";

export const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/dashboard";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form className="flex flex-col gap-5" onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="Username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="6+ password"
      />
      <Button classname="bg-[#635BFF] w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center text-sm">{loginFailed}</p>
      )}
    </form>
  );
};
