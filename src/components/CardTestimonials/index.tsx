import React from 'react';
import {Card} from './styles';

export interface CardProps {
  photo: string,
  name: string,
  website: string,
  text: string
}

const CardTestimonials = (props:CardProps) => {
  return(
    <Card>
        <img src={props.photo} alt=""/>
        <div className="text">
          <h5>{props.name}</h5>
          <span>{props.website}</span>

          <p>{props.text}</p>
        </div>
    </Card>
  )
}

export default CardTestimonials;