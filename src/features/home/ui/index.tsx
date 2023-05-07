import React, { useState } from 'react';
import { HomeSidebar } from '../components/Sidebar';
import { HomeHeader } from '../components/Header/Header';

export const HomeContent = () => {
  const headerTitles = ['For You', 'Following'];

  return (
    <div className="home-body">
      <div className="home-container">
        <HomeSidebar />
        <div className="home-feed">
          <div className="headerblur flexblur">
            <div className="header-title">
              <span className="headerblur-title">Home</span>
            </div>
            <div className="header-list">
              <HomeHeader titles={headerTitles} />
            </div>
          </div>
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
