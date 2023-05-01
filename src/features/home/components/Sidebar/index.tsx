import React from 'react';
import { TwitterIcon } from '../../../../assets/images/svg/twitterIcon';
import { HashTag } from '../../../../assets/images/svg/Hashtag';
import { Config } from '../../../../assets/images/svg/config';
import { Button } from '../../../../components/Button';
import useAuth from '../../../../hooks/useAuth';
import { ProfileTag } from '../../../../components/ProfileTag';

export const HomeSidebar: React.FC = () => {
  const sidebarItem = [
    {
      icon: <HashTag />,
      spam: 'Explorar',
    },
    {
      icon: <Config />,
      spam: 'Configurações',
    },
  ];

  return (
    <div>
      <div className="home-leftSidebar">
        <div className="home-leftSidebar" style={{ position: 'fixed' }}>
          <div className="sidebarBody">
            <div className="action-icon">
              <TwitterIcon color="rgb(214, 217, 219)" width={32} height={32} />
            </div>
            <ul className="leftSidebar-container">
              {sidebarItem.map((item, index) => (
                <li className="leftSidebar-item" key={index}>
                  <div className="leftSidebar-item-content">
                    <div>{item.icon}</div>
                    <span className="item-spam">{item.spam}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="sidebar-buttonContainer">
              <Button content="Tweet" onClick={() => console.log('Tweet')} theme="Twitter" />
            </div>
            <div className="sidebar-buttonContainer1200" />
          </div>
          <div onClick={() => console.log('tag')}>
            <ProfileTag />
          </div>
        </div>
      </div>
    </div>
  );
};
