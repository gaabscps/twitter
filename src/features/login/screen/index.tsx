import React, { useEffect } from 'react';
import { LoginContent } from './ui';
import useForm from '../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import emailValidator from '../../../helpers/validators';
import useAuth from '../../../hooks/useAuth';

// s

export const LoginScreen: React.FC = () => {
  const Navigate = useNavigate();
  const { setUser } = useAuth();

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
        setUser(true);
        localStorage.setItem('user', 'true');
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
