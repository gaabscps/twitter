import React from 'react';
import { TwitterIcon } from '../../assets/images/svg/twitterIcon';
import { useNavigate } from 'react-router-dom';

export const Error: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate('/')} className="error404">
        <TwitterIcon width={100} height={100} color="#1d9bf0" />
        <h1>404</h1>
        <h2>Página não encontrada</h2>
      </div>
    </>
  );
};
