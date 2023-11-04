import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = input;
    // console.log(input)

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let data = res.data;
        Cookies.set("token", data.token, { expires: 1 });
        navigate("/login");
      })

      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });
  };

  return (
    <div className="container mx-auto my-16">
      <div className="flex mx-6 lg:mx-24 gap-6 lg:gap-16">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex-col gap-2">
            <h1 className="text-3xl font-bold">Create your account! 🤩</h1>
            <p className="text-base">Holla! Please enter your details</p>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <input
              value={input.name}
              onChange={handleInput}
              className="border px-4 py-2 w-72 rounded-lg"
              placeholder="Username"
              name="name"
              type="text"
            />
            <input
              value={input.image_url}
              onChange={handleInput}
              className="border px-4 py-2 w-72 rounded-lg"
              placeholder="Image Url"
              name="image_url"
              type="text"
            />
            <input
              value={input.email}
              onChange={handleInput}
              className="border px-4 py-2 w-72 rounded-lg"
              placeholder="Email"
              name="email"
              type="text"
            />
            <input
              value={input.password}
              onChange={handleInput}
              className="border px-4 py-2 w-72 rounded-lg"
              placeholder="Password"
              name="password"
              type="password"
            />
            <div className="flex gap-1">
              <input
                className="border"
                type="checkbox"
                required
                id="termsAndConditions"
              />
              <label className="text-xs" htmlFor="termsAndConditions">
                I accept the Terms and Conditions
              </label>
            </div>

            <div className="flex-col">
              <button
                type="submit"
                className="flex justify-center bg-indigo-600 text-white font-semibold p-2 rounded-lg w-72 text-sm border-2 gap-2"
              >
                Register
              </button>
              <div className="flex-col w-72">
                <div className="flex justify-center w-72 mt-2">
                  <p className="text-xs">
                    Do you have an account?
                    <Link to="/login" className="font-semibold ml-1">
                      Sign in
                    </Link>
                  </p>
                </div>
                <div className="flex justify-end w-60">
                  <img
                    src="https://anima-uploads.s3.amazonaws.com/projects/64e6cf9db6adb5ab939b94fa/releases/64e6d016a07e2737999b40c5/img/vector-1-1@2x.png"
                    alt="vector"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-col mt-16 w-1/2">
          <img
            alt="ilustration"
            src="https://anima-uploads.s3.amazonaws.com/projects/64e6cf9db6adb5ab939b94fa/releases/64e6d016a07e2737999b40c5/img/undraw-welcome-cats-thqn-1-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
