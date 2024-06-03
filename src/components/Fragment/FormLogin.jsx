import axios from "axios";
import Cookies from "js-cookie";
import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const FormLogin = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [loginFailed, setLoginFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = input;

    setIsLoading(true);

    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/");
      })
      .catch((error) => {
        setLoginFailed("Login failed. Please check your email and password.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form className="flex flex-col gap-5" onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        ref={emailRef}
        value={input.email}
        onChange={handleInput}
        required
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="8+ password"
        value={input.password}
        onChange={handleInput}
        required
        minLength="8"
      />
      <Button
        classname="bg-[#635BFF] w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center text-sm">{loginFailed}</p>
      )}
    </form>
  );
};
