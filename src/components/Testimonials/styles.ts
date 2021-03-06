import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-color: #9C69E2;
  border-radius: 50px;
  max-width: 1118px;
  height: 600px;
  margin-bottom: 100px;

  .title{
    margin-left: 93px;
    margin-bottom: 40px;
    text-align: left;
   h4{
    padding-top: 90px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
   }
  } 
`;

export const Card = styled.div`
  display: flex;
  max-width: 645px;
  height: 330px;
  margin-left: 93px;
  background-color: #FFFFFF;
  border-radius: 50px;

  img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;