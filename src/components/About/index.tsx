import React from 'react';
import AboutImg from '../AboutImg';
import {Container} from './styles';

const About = () => {
  return(
    <Container>
       <AboutImg/>
      <div className="text">
        <h2>We are a high-level data storage bank</h2>
        <p>The place to store various data that you can access at any 
          time through the internet  and where you can carry it. 
          This very flexible storage area has a high level of security. 
          To enter into your own data you must enter the password that 
          you created when you registered in this Data Warehouse. 
        </p>
      </div>
    </Container>
  )
}

export default About;