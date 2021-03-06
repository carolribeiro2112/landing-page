import React from 'react';
import Button from '../Button';
import LogoImg from '../LogoImg/LogoImg';
import { Head } from './styles';

const Header = () => {
  return (
    <Head>
      <div className="header">
        <LogoImg/>

        <div className="menu">
          <a href="about">About</a>
          <a href="help">Help</a>
          <a href="features">Features</a>
          <a href="signup">signUp</a>
        </div>
      </div>
      
      <Button color="#212353" 
      shadow="5px 5px 5px rgba(0,0,0,0.1)"
      backgroundColor=""
      name="Request Demo"
      />
      
    </Head>
  )
}

export default Header;