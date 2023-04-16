import React from 'react';
import { LoginContent } from './ui';
import useForm from '../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import emailValidator from '../../../helpers/validators';

export interface LoginScreenProps {}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
  const Navigate = useNavigate();

  const { formData, onChangeFormInput, setFormErrors, formErrors } = useForm({
    initialData: {
      login: '',
    },
  });

  const authValidation = () => {
    if (emailValidator(String(formData.login))) {
      if (formData.login === '') {
        setFormErrors({
          login: ['Login é obrigatório'],
        });
      }
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

  return (
    <>
      <LoginContent
        auth={authValidation}
        formData={formData}
        formErrors={formErrors}
        onChange={onChangeFormInput}
      />
    </>
  );
};
