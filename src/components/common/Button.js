import React from 'react';

function Button({ className, type = 'button', label, icon, callback, style }) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={callback}
      style={style}
    >
      {label && label}
      {icon && icon}
    </button>
  );
}
export default Button;
