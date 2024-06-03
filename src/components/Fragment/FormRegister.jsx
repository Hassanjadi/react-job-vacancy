import axios from "axios";
import Cookies from "js-cookie";
import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const FormRegister = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const [registerFailed, setRegisterFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const { name, image_url, email, password } = input;

    setIsLoading(true);

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        const data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/login");
      })
      .catch((error) => {
        setRegisterFailed(
          "Registration failed. Please check your information."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerRef = useRef(null);
  useEffect(() => {
    registerRef.current.focus();
  }, []);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleRegister}>
      <InputForm
        label="Username"
        type="text"
        name="name"
        placeholder="John Doe"
        ref={registerRef}
        value={input.name}
        onChange={handleInput}
      />
      <InputForm
        label="Photo"
        type="text"
        name="image_url"
        placeholder="Image Url"
        value={input.image_url}
        onChange={handleInput}
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
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
        minLength="8"
        required
      />

      <Button
        classname="bg-[#635BFF] w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Register in..." : "Register"}
      </Button>
      {registerFailed && (
        <p className="text-red-500 text-center text-sm">{registerFailed}</p>
      )}
    </form>
  );
};
