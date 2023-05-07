import React, { useState } from 'react';
import { HomeSidebar } from '../components/Sidebar';
import { HomeHeader } from '../components/Header/Header';
import { Card } from '../../../components/Card';
import { Trends } from '../components/Trends';

export const HomeContent = () => {
  const headerTitles = ['For You', 'Following'];
  const trends = [
    {
      trend: '#1',
      name: 'Trend Name',
      tweets: 50000,
    },
    {
      trend: '#2',
      name: 'Trend Name',
      tweets: 21700,
    },
    {
      trend: '#3',
      name: 'Trend Name',
      tweets: 10000,
    },
    {
      trend: '#4',
      name: 'Trend Name',
      tweets: 5000,
    },
  ];

  const postImage = [
    {
      image: 'https://picsum.photos/600/400',
    },
    {
      image: 'https://picsum.photos/601/401',
    },
    {
      image: 'https://picsum.photos/602/402',
    },
    {
      image: 'https://picsum.photos/603/403',
    },
  ];

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
              {postImage.map((image, key) => (
                <div
                  key={key}
                  style={{ backgroundImage: `url(${image.image})` }}
                  className="feedPost"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="home-rightSidebar">
          <div className="home-rightSidebar">
            <div className="home-rightSidebar-body">
              <div className="mb-1">
                <Card
                  header={
                    <div className="rightSidebar-card-title-container">
                      <h2 className="rightSidebar-card-title">What’s Happening?</h2>
                    </div>
                  }
                  // eslint-disable-next-line react/no-children-prop
                  children={trends.map((trend, key) => (
                    <Trends key={key} trend={trend.trend} name={trend.name} tweets={trend.tweets} />
                  ))}
                />
              </div>
              <div>
                <Card
                  header={
                    <div className="rightSidebar-card-title-container">
                      <h2 className="rightSidebar-card-title">What’s Happening?</h2>
                    </div>
                  }
                  // eslint-disable-next-line react/no-children-prop
                  children={trends.map((trend, key) => (
                    <Trends key={key} trend={trend.trend} name={trend.name} tweets={trend.tweets} />
                  ))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
