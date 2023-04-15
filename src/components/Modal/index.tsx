import React, { ReactElement } from 'react';
import { TwitterIcon } from '../../assets/images/svg/twitterIcon';
import { ModalHeader } from './components/ModalHeader/';

interface ModalProps {
  modalBody: ReactElement;
  toggle: (open: boolean) => void;
  open: boolean;
}

export const Modal: React.FC<ModalProps> = ({ modalBody, open, toggle }) => {
  const icon = <TwitterIcon color="rgb(214, 217, 219)" width={32} height={53} />;
  return (
    <>
      {open && (
        <div className="modalModule">
          <div className="modalContainer">
            <ModalHeader content={icon} setOpen={toggle} />
            <div className="modalBody">
              <div className="modalBodyHeaderContainer">
                <div className="modalBodyHeaderContent">{modalBody}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
