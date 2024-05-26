import React from "react";
import { AuthLayout } from "../components/Layout/AuthLayouts";
import { FormRegister } from "../components/Fragment/FormRegister";
import Register from "../assets/images/Register.png";

export const RegisterPage = () => {
  return (
    <AuthLayout
      type="register"
      title="Create account! 🤩"
      subtitle="Holla! Please enter your details"
      background={Register}
    >
      <FormRegister />
    </AuthLayout>
  );
};
