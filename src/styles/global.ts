import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(180deg, #F6FAFD 0%, #FFFFFF 19.4%);
  }
  body, button {
    font: 16px Nunito Sans, sans-serif;
  }
  #root {
    margin: 0 auto;
  }
  button{
    cursor: pointer;
  }
`;