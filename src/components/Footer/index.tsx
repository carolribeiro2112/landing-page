import React from 'react';
import Button from '../Button';

import {Container} from './styles';


const Footer = () => {
  return(
    
    <Container>
      <div className="header">
        <div>
          <h2>Try for free !</h2>
          <p>Get limited 1 week free try our features!</p>
        </div>

        <div className="buttons">
        <Button  
            backgroundColor="#F063B8"
            name="Learn more"
          />
          <Button color="#212353" 
            shadow="5px 5px 5px rgba(0,0,0,0.1)"
            backgroundColor=""
            name="Request Demo"
          />
        </div>
      </div>

      <div className="content">
        <div className="info">
        <p>Data Warehouse</p>
          <div id="local">
            <p>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
          </div>
          <div id="contact">
            <p>info@warehouse.project 1-232-3434 (Main)</p>
          </div>
        </div>
        <div className="about">
          <h6>About</h6>
          <p>Profile</p>
          <p> Features</p>
          <p>Careers</p>
          <p>DW News</p>
        </div>

        <div className="help">
          <h6>Help</h6>
          <p>Support</p>
          <p>Sign up</p>
          <p>Guide</p>
          <p>Reports</p>
          <p>QA</p>
        </div>

        <div className="social">
          <h6>Social Media</h6>
        </div>
      </div>

      <div id="copyright">
        <p>© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.</p>
      </div>
    </Container>
   
  )
}

export default Footer;