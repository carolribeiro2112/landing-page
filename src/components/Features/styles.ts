import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-bottom: 150px;

  h3 {
    margin-bottom: 50px;
  }

  p{
    margin: 0 auto;
    max-width:584px;
    max-height: 58px;
    margin-bottom:100px;
  }

  .grid{
    margin: 0 auto;
    max-width:1117px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 50px;
  }
`;
