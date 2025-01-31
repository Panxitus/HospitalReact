import React from 'react';
import logo from '../../assets/images/logo.svg';
import PropTypes from 'prop-types';

const Logo = ({ altText }) => {
    return (
      <img src={logo} alt={altText} className="logo" />
    );
  };
  
  Logo.propTypes = {
    altText: PropTypes.string,
  };
  
  Logo.defaultProps = {
    altText: 'Company Logo',
  };
  
  export default Logo;