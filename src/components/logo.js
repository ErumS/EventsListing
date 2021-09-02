import React from 'react';
import CompanyLogo from '../img/logo.svg';
import '../css/index.css';

const Logo = () => {
  return (
    <div className="logo-div">
      <img src={CompanyLogo} alt="Logo" />
    </div>
  )
}

export default Logo;