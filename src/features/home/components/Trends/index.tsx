import React from 'react';

interface TrendsProps {
  trend: string;
  name: string;
  tweets: number;
}

export const Trends: React.FC<TrendsProps> = ({ name, trend, tweets }) => {
  return (
    <>
      <div className="trending-container">
        <span>{trend}</span>
        <span>{name}</span>
        <span>{tweets} Tweets</span>
      </div>
    </>
  );
};
