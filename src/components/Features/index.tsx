import React from 'react';
import {Container} from './styles';
import Imagem01 from '../../assets/image_03.svg';

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

        <div className="content">
          <img src={Imagem01} alt=""/>
          <div className="text">
            <h4>Search Data</h4>
            <p>Don’t worry if your data is very
              large, the Data Warehoue provides 
              a search engine, which is useful for 
              making it easier to find data effectively 
              saving time.
            </p>
            <a href="teste">Learn more</a>
          </div>
        </div>

        <div className="content">
          <img src={Imagem01} alt=""/>
          <div className="text">
            <h4>Search Data</h4>
            <p>Don’t worry if your data is very
              large, the Data Warehoue provides 
              a search engine, which is useful for 
              making it easier to find data effectively 
              saving time.
            </p>
            <a href="teste">Learn more</a>
          </div>
        </div>

        <div className="content">
          <img src={Imagem01} alt=""/>
          <div className="text">
            <h4>Search Data</h4>
            <p>Don’t worry if your data is very
              large, the Data Warehoue provides 
              a search engine, which is useful for 
              making it easier to find data effectively 
              saving time.
            </p>
            <a href="teste">Learn more</a>
          </div>
        </div>

        <div className="content">
          <img src={Imagem01} alt=""/>
          <div className="text">
            <h4>Search Data</h4>
            <p>Don’t worry if your data is very
              large, the Data Warehoue provides 
              a search engine, which is useful for 
              making it easier to find data effectively 
              saving time.
            </p>
            <a href="teste">Learn more</a>
          </div>
        </div>

      </div>

    </Container>
  )
}

export default Features;