import styled from 'styled-components';

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

    margin: 60px 30px 0 70px;
  }

  .text{
    max-width: 385px;
    margin-top: 80px;

    p{
      margin-top: 20px;
    }
  }
`;