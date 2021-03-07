import React from 'react';
import {CardContent} from './styles';

export interface FeatureProps{
  img: string,
  backgroundColor?: string,
  title: string,
  text: string,
}

const CardFeature = (props:FeatureProps) => {
  return(
    <CardContent
      backgroundColor={props.backgroundColor}
    >
      <div className="img">
        <img src={props.img} alt=""/>
      </div>
        <div className="text">
          <h4>{props.title}</h4>
          <p>{props.text}</p>
          <a href="teste">Learn more</a>
        </div>
    </CardContent>
  )
}

export default CardFeature;