import React from 'react';
import {ButtonStyle} from './styles';

export interface ButtonProps {
  name: string;
  color?: string;
  backgroundColor?: string;
  shadow?: string;
}

const Button = (props:ButtonProps) => {
  return(
    <ButtonStyle 
      type="button"
      color={props.color}
      backgroundColor={props.backgroundColor}
      shadow={props.shadow}
    >{props.name}
    </ButtonStyle>
  )
}

export default Button;