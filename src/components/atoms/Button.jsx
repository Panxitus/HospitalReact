import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default Button;