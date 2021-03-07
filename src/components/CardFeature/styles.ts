import styled from 'styled-components';

export interface FeatureProps{
  backgroundColor?: string, 
}


export const CardContent = styled.div<FeatureProps>`
  display:flex;
  align-content: center;
  justify-content: center;
  border-radius: 50px;
  background-color:${({backgroundColor})=> backgroundColor};
  width: 510px;
  height: 358px;
  justify-self: center;

  .img{
    align-self: center;
  }

  .text{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    max-width: 220px;
    text-align: center;
    padding:10px;

    align-items:flex-end;
    justify-content: center;
        
    h4{
      margin-bottom: 20px;
      margin-top: 49px;
      text-align: justify;
    }

    p{
      margin-bottom: 100px;
      text-align: justify;
    }

    a{
      text-decoration: none;
      align-self: center;
      text-align: justify;
    }
  }

`;