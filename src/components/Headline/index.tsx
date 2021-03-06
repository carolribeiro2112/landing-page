import React from 'react';
import BackgroundImg from '../BackgroundImg';
import Button from '../Button';

import {Container, Title, About, Content} from './styles';

const Headline = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>
            <h1>Save your data storage here.</h1>
          </Title>

          <About>
            <p>
              Data Warehouse is a data storage area that has been
              tested for security, so you can store your data here
              safely but not be afraid of being stolen by others.
            </p>
          </About>
    
          <Button  
            backgroundColor="#9C69E2"
            name="Learn more"
          />
        </Content>

        
          <BackgroundImg/> 
        
      </Container>
    </>
  )
}

export default Headline;