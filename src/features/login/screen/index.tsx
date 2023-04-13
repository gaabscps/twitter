import React from "react";
import { LoginContent } from "./ui";

export interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  console.log("login screen");

  return (
    <>
      <LoginContent />
    </>
  );
};
