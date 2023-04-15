import React, { useState } from 'react';
import { Modal } from '../../../../components/Modal';
import { ModalBodyLogin } from '../../components/ModalBodyLogin';

export interface LoginContentProps {
  onChange: (e: any) => void;
  value: string;
}

export const LoginContent: React.FC<LoginContentProps> = ({ onChange, value }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="loginScreen">
        <Modal
          modalBody={<ModalBodyLogin onChange={onChange} value={value} />}
          toggle={setOpen}
          open={open}
        />
      </div>
    </>
  );
};
