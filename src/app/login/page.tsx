import React from "react";
import { Modal } from "@/components/Modal";
import { ModalBodyLogin } from "./components/ModalBodyLogin";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="loginScreen">
      <Modal modalBody={<ModalBodyLogin />} />
    </div>
  );
};

export default Login;
