"use client";

import React, { ReactElement } from "react";
import { ModalHeader } from "./components/ModalHeader";
import { TwitterIcon } from "../../assets/images/svg/twitterIcon";
// import { ModalHeader } from "./components/ModalHeader/";

interface ModalProps {
  modalBody: ReactElement;
}

export const Modal: React.FC<ModalProps> = ({ modalBody }) => {
  //   const icon = (
  //     <TwitterIcon color="rgb(214, 217, 219)" width={32} height={53} />
  //   );

  const [open, setOpen] = React.useState(true);

  return (
    <>
      {open && (
        <div className="modalModule">
          <div className="modalContainer">
            <ModalHeader
              content={
                <TwitterIcon
                  color="rgb(214, 217, 219)"
                  width={32}
                  height={53}
                />
              }
              setOpen={setOpen}
            />
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
