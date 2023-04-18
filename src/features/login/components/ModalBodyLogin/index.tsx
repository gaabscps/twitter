import { GoogleLogo } from '../../../../assets/images/svg/googleLogo';
import { AppleLogo } from '../../../../assets/images/svg/appleLogo';
import { Button } from '../../../../components/Button';
import { LineSeparator } from '../LineSeparator';
import React from 'react';
import { InputText } from '../../../../components/InputText';
import { FormData, FormErrors, OnChangeFormInput } from '../../../../hooks/useForm';

interface ModalBodyLoginProps {
  onChange: OnChangeFormInput;
  formData: FormData;
  auth: () => void;
  formErrors: FormErrors;
}

export enum FormInputName {
  login = 'login',
}

export const ModalBodyLogin: React.FC<ModalBodyLoginProps> = ({
  onChange,
  auth,
  formData,
  formErrors,
}) => {
  const Buttons =
    [
      {
        name: 'Fazer login com o Google',
        icon: <GoogleLogo width={18} height={18} />,
        action: () => (window.location.href = 'https://google.com.br'),
      },
      {
        name: 'Entrar com Apple',
        icon: <AppleLogo width={18} height={18} />,
        action: () => (window.location.href = 'https://apple.com.br'),
        bold: true,
      },
    ] || [];

  return (
    <>
      <div className="loginHeaderContainer">
        <span className="loginHeader">Entrar no Twitter</span>
      </div>
      {Buttons?.map((socialMedia, index) => (
        <div
          key={index}
          style={Buttons.length - 1 === index ? { marginBottom: '12px' } : {}}
          className="modalSocialMediaButtonContainer"
        >
          <Button
            onClick={socialMedia.action}
            content={socialMedia.name}
            icon={socialMedia.icon}
            bold={socialMedia.bold}
          />
        </div>
      ))}
      <div style={{ marginBottom: '11px' }}>
        <LineSeparator />
      </div>
      <form
        onSubmit={e => {
          auth();
          e.preventDefault();
        }}
      >
        <InputText
          placeholder="Celular, e-mail ou nome de usuário"
          onChange={e => onChange(FormInputName.login)(e.target.value)}
          value={formData[FormInputName.login] as string}
          error={formErrors.login}
          required={true}
        />
        <div className="loginActionContainer">
          <Button
            className="loginActionButton"
            content="Avançar"
            bold={true}
            onClick={() => auth()}
            type="submit"
          />
          <Button
            className="loginActionButton"
            content="Esqueceu sua senha?"
            onClick={() => undefined}
            theme="Outline"
          />
        </div>
      </form>
      <div className="loginSignupContainer">
        <span className="loginSignupText">Não tem uma conta?</span>
        <a href="https://twitter.com/i/flow/signup" className="loginSignupLink">
          Inscreva-se
        </a>
      </div>
    </>
  );
};
