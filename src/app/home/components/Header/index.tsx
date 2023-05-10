"use client";

import React, { useState } from "react";

interface HeaderProps {
  titles: string[];
}

export const HomeHeader: React.FC<HeaderProps> = ({ titles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    if (index != activeIndex) {
      setActiveIndex(index);
    }
  };
  return (
    <div className="d-flex w-100 h-100">
      {titles.map((title, index) => (
        <div
          onClick={() => handleClick(index)}
          key={index}
          className="headerList-container d-flex w-100 action-button"
        >
          <ul className="headerList-list">
            <div
              className={`d-flex flex-column justify-content-between headerList-border ${
                activeIndex === index ? "Active" : ""
              }`}
            >
              <li
                className={`headerList-item ${
                  activeIndex === index ? "Active" : ""
                }`}
              >
                {title}
              </li>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
