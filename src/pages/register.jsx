import React from "react";
import { AuthLayout } from "../components/Layout/AuthLayouts";
import { FormRegister } from "../components/Fragment/FormRegister";

export const RegisterPage = () => {
  return (
    <AuthLayout
      type="register"
      title="Create account! 🤩"
      subtitle="Holla! Please enter your details"
      background="https://i.ibb.co/ydGqYTm/illustration-register.png"
    >
      <FormRegister />
    </AuthLayout>
  );
};
