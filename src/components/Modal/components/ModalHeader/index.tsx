import React from 'react';
import { CloseX } from '../../../../assets/images/svg/closeX';
import { useNavigate } from 'react-router-dom';

interface ModalHeaderProps {
  content: string | JSX.Element;
  setOpen: (open: boolean) => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ content, setOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="modalHeader">
        <div className="modalHeader--icon">
          <div
            onClick={() => {
              navigate('/error404');
              setOpen(false);
            }}
            className="buttonRoundEffect"
          >
            <CloseX color="white" width={20} height={20} />
          </div>
        </div>
        <div className="modalHeader--content">{content}</div>
        <div className="modalHeader--icon"></div>
      </div>
    </>
  );
};
