import React from 'react';
import { CloseX } from '../../assets/images/svg/closeX.tsx';
import { TwitterIcon } from '../../assets/images/svg/twitterIcon.tsx';
import { ModalHeader } from './components/ModalHeader/index.tsx';

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const icon = <TwitterIcon color="rgb(214, 217, 219)" width={32} height={53} />;
  return (
    <>
      <div className="modalModule">
        <div className="modalContainer">
          <ModalHeader content={icon} />
          <div className="modalBody"></div>
        </div>
      </div>
    </>
  );
};
