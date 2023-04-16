import React, { useEffect } from 'react';
import { LoginContent } from './ui';
import useForm, { FormDataValue } from '../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import emailValidator from '../../../helpers/validators';

export interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const Navigate = useNavigate();

  const { formData, onChangeFormInput, setFormErrors, formErrors } = useForm({
    initialData: {
      login: null,
    },
  });

  const auth = () => {
    if (emailValidator(String(formData.login))) {
      if (formData.login === 'admin@twitter.com') {
        Navigate('/home');
      } else {
        setFormErrors({
          login: ['Login inválido'],
        });
      }
    } else {
      setFormErrors({
        login: ['Login deve ser um email válido'],
      });
    }
  };

  const onChangeForm = (name: string) => (value: FormDataValue) => {
    onChangeFormInput(name)(value);
    setFormErrors({
      login: [],
    });
  };

  return (
    <>
      <LoginContent
        auth={auth}
        formData={formData}
        formErrors={formErrors}
        onChange={onChangeForm}
      />
    </>
  );
};
