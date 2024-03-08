import React from "react";
import { FormLogin } from "../components/Fragment/FormLogin";
import { AuthLayout } from "../components/Layout/AuthLayouts";

export const LoginPage = () => {
  return (
    <AuthLayout
      type="login"
      title="Welcome back 👋"
      subtitle="Welcome back! Please enter your details"
      background="https://i.ibb.co/h28hrM5/illustration-login.png"
    >
      <FormLogin />
    </AuthLayout>
  );
};
