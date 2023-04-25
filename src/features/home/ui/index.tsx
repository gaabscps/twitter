import React from 'react';
import { TwitterIcon } from '../../../assets/images/svg/twitterIcon';
import { HashTag } from '../../../assets/images/svg/Hashtag';
import { Config } from '../../../assets/images/svg/config';

export const HomeContent = () => {
  return (
    <div className="home-body">
      <div className="home-container">
        <div className="home-leftSidebar">
          <div>
            <div className="action-icon">
              <TwitterIcon color="rgb(214, 217, 219)" width={32} height={32} />
            </div>
            <ul className="leftSidebar-container">
              <li className="leftSidebar-item">
                <div className="leftSidebar-item-content">
                  <div>
                    <HashTag />
                  </div>
                  <span className="item-spam">Explorar</span>
                </div>
              </li>
              <li className="leftSidebar-item">
                <div className="leftSidebar-item-content">
                  <div>
                    <Config />
                  </div>
                  <span className="item-spam">Configurações</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-feed">content2</div>
        <div className="home-rightSidebar">content3</div>
      </div>
    </div>
  );
};
