import React from 'react';
import sunafilLogo from '../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center">
      <div className="flex items-center space-x-2">

        <img
          src={sunafilLogo}
          alt="SUNAFIL"
          className="h-8 w-auto ml-2"
        />
      </div>
    </a>
  );
};

export default Logo;
