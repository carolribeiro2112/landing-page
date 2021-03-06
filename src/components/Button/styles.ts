import styled from 'styled-components';

export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  shadow?: string;
}


export const ButtonStyle = styled.button<ButtonProps>`
 
  width: 200px;
  height: 60px;
  border: none;
  background-color:${({backgroundColor})=> backgroundColor||'#FFFFFF'}; 
  color:${({color})=>color||'#FFFFFF'};
  border-radius: 50px;
  box-shadow: ${({shadow})=>shadow||'none'};
`;

