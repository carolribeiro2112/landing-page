import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 2px solid rgba(156,105,226,0.2);
  

  .header{
    display:flex;
    margin-left: 200px;
    margin-top:100px;
    justify-content:space-between;
   
    
    h2{
      font-size: 40px;
      font-weight: 700;
      line-height: 52px;
      color: #212353;
      margin-bottom:20px;
    }
    p{
      margin-bottom:153px;
    }

    .buttons{
      margin-right:200px;
    }
  }

  .content{
    display:flex;
    max-width:1120px;
    margin: 0 auto;

    .info{
      margin-right: 140px;
      >p{
        margin-bottom: 67px;
      }

      #local{
        max-width: 335px;
        height: 65px;
        margin-bottom:10px;
      }

      #contact{
        max-width: 335px;
        height: 60px;
      }
    }

    .about{
      margin-right: 50px;
    }

    .help{
      margin-right: 50px;
    }
  }

  #copyright{
    p{
      padding: 93px 0;
      text-align: center;
    }
  }
`;