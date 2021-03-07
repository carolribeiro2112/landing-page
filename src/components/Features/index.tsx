import React from 'react';
import {Container} from './styles';
import CardFeature from '../CardFeature';
import Image03 from '../../assets/image_03.svg';
import Image04 from '../../assets/image_04.svg';
import Image05 from '../../assets/image_05.svg';
import Image06 from '../../assets/image_06.svg';


const Features = () => {
  return(
    <Container>
      <h3>Features</h3>
      <p>Some of the features 
        and advantages that we provide 
        for those of you who store data 
        in this Data Warehouse.
      </p>

      <div className="grid">
        <CardFeature 
          img={Image03} 
          backgroundColor="rgba(104,201,186,0.1)"
          title="Search Data"
          text="Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time."
        />
        <CardFeature
          img={Image04} 
          backgroundColor="rgba(156,105,226,0.1)"
          title="24 Hours Access"
          text="Access is given 24 hours a full morning to night and
          meet again in the morning, giving you comfort when
          you need data when urgent."
        />
        <CardFeature
          img={Image05}
          backgroundColor="rgba(240,99,184,0.1)"
          title="Print Out"
          text="Print out service gives you convenience if someday
          you need print data, just edit it all and just print it."
        />
        <CardFeature
          img={Image06} 
          backgroundColor="rgba(45,156,219,0.1)"
          title="Security Code"
          text="Data Security is one of our best facilities. Allows for your files
          to be safer. The file can be secured with a code or password that 
          you created, so only you can open the file."
        />
      </div>

    </Container>
  )
}

export default Features;