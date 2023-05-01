import React from 'react';

export const ProfileTag: React.FC = () => {
  const userName = localStorage.getItem('userName');

  return (
    <div className="leftSidebar-item profileTag">
      <div className="roundProfileImage">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="profile"
        />
      </div>
      <div className="profileTagUser">
        <div className="profileTagUserName">
          <span> {userName}</span>
          <span>admin@twitter.com</span>
        </div>
        <div
          style={{
            marginLeft: '10px',
            fontSize: '40px',
          }}
        >
          <span>...</span>
        </div>
      </div>
    </div>
  );
};
