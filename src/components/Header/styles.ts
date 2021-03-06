import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content:space-evenly;

  max-width: 1120px;

  padding-top: 46px;
  padding-bottom: 30px;

  margin: 0 auto;

  margin-bottom: 100px;

  .header{
    display:flex;
    align-items: center;
    
    .menu{
      display: flex;
      align-items: center;
      margin-left: 121px;
      margin-right: 418px;

      a{
        text-decoration: none;
        color: #212353;
        font-weight: bold;

        &+a{
          margin-left:20px;
          font-weight: normal;
        }
      }
    }
  }

  /* button{
    width: 200px;
    height: 30px;
    border: none;
    background-color:#FFFFFF; 
    border-radius: 50px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
  } */
`;