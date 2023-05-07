import React from 'react';

interface CardProps {
  color?: string;
  children?: any;
  header?: any;
  footer?: any;
}

export const Card: React.FC<CardProps> = ({ color, header, children, footer }) => {
  return (
    <div className="card-container">
      <div style={{ backgroundColor: color || '#16181C' }} className="card-header">
        {header}
      </div>
      {children.map((child: any, key: any) => (
        <div key={key} className="card-children">
          {child}
        </div>
      ))}
      {footer || (
        <div style={{ backgroundColor: color || '#16181C' }} className="card-footer">
          <div className="">
            <span className="card-footer-title">Show More</span>
          </div>
        </div>
      )}
    </div>
  );
};
