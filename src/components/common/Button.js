import React from 'react';

function Button({
  className,
  type = 'button',
  label,
  icon,
  onClick,
  style,
  disabled,
}) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {label && label}
      {icon && icon}
    </button>
  );
}
export default Button;
