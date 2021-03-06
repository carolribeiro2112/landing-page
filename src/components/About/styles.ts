import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: 240px;
  max-width: 1117px;
  max-height: 560px;
  background-color: rgba(240, 99, 184, 0.15);
  border-radius: 50px;
  margin-bottom: 150px;

  .text{
    margin-top: 125px;
    margin-left: 62px;
    max-width: 475px;
    h2{
      font-size: 40px;
      line-height: 52px;
      font-weight: 700;
      margin-bottom: 40px;
      color: #212353;
    }

    p{
      font-size: 18px;
      line-height: 28.8px;
      color: #4B5D68;
    }
  }
`;