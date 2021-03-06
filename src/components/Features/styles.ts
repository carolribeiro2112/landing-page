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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .content {
      display:flex;
      align-content: center;
      justify-content: center;

      .text{
        max-width: 220px;
        text-align: center;
        
        h4{
          margin-bottom: 20px;
          margin-top: 49px;

        }
        p{
          margin-bottom: 100px;
        }

        a{
          text-decoration: none;
        }
     }
    }
  }
`;
