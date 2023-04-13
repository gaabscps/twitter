import React, { ReactComponentElement } from 'react';
import { CloseX } from '../../../../assets/images/svg/closeX';

interface ModalHeaderProps {
  content: string | JSX.Element;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ content }) => {
  console.log('modal');
  return (
    <>
      <div className="modalHeader">
        <div className="modalHeader--icon">
          <div className="buttonRoundEffect">
            <CloseX color="white" width={20} height={20} />
          </div>
        </div>
        <div className="modalHeader--content">{content}</div>
        <div className="modalHeader--icon"></div>
      </div>
    </>
  );
};
