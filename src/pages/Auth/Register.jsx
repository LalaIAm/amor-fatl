import React from "react";
import ImageSide from "./components/ImageSide";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div id="auth-page" className="font-sans">
      <div className="grain-overlay"></div>
      <div className="split-layout">
        <ImageSide />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
