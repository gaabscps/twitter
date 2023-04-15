import React from 'react';

interface ButtonProps {
  content: React.ReactNode;
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode | string;
  bold?: boolean;
  theme?: 'Black' | 'Outline';
}

export const Button: React.FC<ButtonProps> = ({
  content,
  icon,
  bold,
  onClick,
  theme,
  className,
}) => {
  return (
    <>
      <div onClick={() => onClick()} className={`buttonContainer button${theme} ${className}`}>
        <div className="buttonIcon" style={{ color: 'black' }}>
          {icon}
        </div>
        <div style={bold ? { fontWeight: '700' } : {}} className="buttonContent">
          {content}
        </div>
      </div>
    </>
  );
};
