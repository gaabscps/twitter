import { useState } from "react";
import emailValidator from "../../helpers/validators/emailValidator";
import useForm from "../../hooks/useForm";

const useLogin = () => {
  const loggedInUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState<boolean>(Boolean(loggedInUser));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { formData, onChangeFormInput, setFormErrors, formErrors } = useForm({
    initialData: {
      login: "",
    },
  });

  const authValidation = () => {
    console.log(formData.login);
    if (emailValidator(String(formData.login))) {
      if (formData.login === "") {
        setFormErrors({
          login: ["Login é obrigatório"],
        });
      }
      if (formData.login === "admin@twitter.com") {
        setUser(true);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", "true");
          localStorage.setItem("userName", "admin");
        }
      } else {
        setFormErrors({
          login: ["Login inválido"],
        });
      }
    } else {
      setFormErrors({
        login: ["Login deve ser um email válido"],
      });
    }
  };

  return {
    formData,
    onChangeFormInput,
    authValidation,
    formErrors,
    user,
  };
};

export default useLogin;
