import React, { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { ModalBodyLogin } from '../../components/ModalBodyLogin';
import { FormData, FormErrors, OnChangeFormInput } from '../../../../hooks/useForm';

export interface LoginContentProps {
  onChange: OnChangeFormInput;
  formData: FormData;
  auth: () => void;
  formErrors: FormErrors;
}

export const LoginContent: React.FC<LoginContentProps> = ({
  onChange,
  formData,
  formErrors,
  auth,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="loginScreen">
        <Modal
          modalBody={
            <ModalBodyLogin
              formErrors={formErrors}
              auth={auth}
              formData={formData}
              onChange={onChange}
            />
          }
          toggle={setOpen}
          open={open}
        />
      </div>
    </>
  );
};
