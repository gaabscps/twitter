import React from "react";
import { Modal } from "../../../../components/Modal";

export interface LoginContentProps {}

export const LoginContent: React.FC<LoginContentProps> = () => {
  console.log("login content");

  return (
    <>
      <div className="loginScreen">
        <Modal />
      </div>
    </>
  );
};
