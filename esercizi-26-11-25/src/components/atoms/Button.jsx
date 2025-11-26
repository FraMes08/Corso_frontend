import React from 'react';

const Button = ({ onClick, children, variant = 'primary', type = 'button', disabled = false }) => {
  // Mappatura delle varianti alle classi CSS
  let variantClass = '';
  switch (variant) {
    case 'primary':
      variantClass = 'button-primary';
      break;
    case 'danger':
      variantClass = 'button-danger';
      break;
    case 'secondary':
      variantClass = 'button-secondary';
      break;
    case 'text':
      variantClass = 'button-text';
      break;
    default:
      variantClass = 'button-primary';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variantClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;