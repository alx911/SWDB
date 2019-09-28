import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">Watch out!</span>
      <span>
        Dark side is strong here!
      </span>
      <span>
        (not found)
      </span>
    </div>
  );
};

export default ErrorIndicator;
