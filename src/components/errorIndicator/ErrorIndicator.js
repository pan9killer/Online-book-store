import React from 'react';
import "./ErrorIndicator.css";
import icon from "./error-cat.png"

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">Oops!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent cats to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;