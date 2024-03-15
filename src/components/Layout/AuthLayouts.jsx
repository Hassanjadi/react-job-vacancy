import React from "react";
import { Link } from "react-router-dom";

export const AuthLayout = (props) => {
  const { children, title, subtitle, background, type } = props;
  return (
    <div className="max-w-screen h-screen lg:flex bg-[#F9F9F9]">
      <div className="h-screen flex justify-center items-center lg:w-2/4">
        <div className="flex flex-col gap-6">
          <div className="flex-col gap-2 ">
            <img
              src="https://i.ibb.co/zNDdmtV/logo-lokerin.png"
              alt="logo-lokerin"
              className="mb-16"
            />
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-base">{subtitle}</p>
          </div>
          {children}
          <p className="text-sm text-center">
            {type === "login"
              ? "Don’t have an account?"
              : "Do you have an account?"}
            {type === "login" && (
              <Link to="/register" className="font-bold text-[#635BFF]">
                {" "}
                Sign up
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-[#635BFF]">
                {" "}
                Sign in
              </Link>
            )}
          </p>
        </div>
      </div>
      <div className="hidden h-screen justify-center items-center lg:w-2/4 lg:flex lg:justify-center lg:items-center">
        <img
          className="w-3/4 h-auto"
          alt="illustration-login"
          src={background}
        />
      </div>
    </div>
  );
};
