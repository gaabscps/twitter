import React from 'react';
import { HomeSidebar } from '../components/Sidebar';

export const HomeContent = () => {
  return (
    <div className="home-body">
      <div className="home-container">
        <HomeSidebar />
        <div className="home-feed">
          <div className="headerblur" />
          <div className="home-feedContainer">
            <div className="home-feedContent">
              <div className="feedTextArea">
                <input type="textarea" placeholder={`What's happening`} />
              </div>
              <div className="feedPost"></div>
              <div className="feedPost1"></div>
            </div>
          </div>
        </div>
        <div className="home-rightSidebar">content3</div>
      </div>
    </div>
  );
};
