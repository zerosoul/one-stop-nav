import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
    box-sizing:border-box;
    outline:none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    position: relative;
    min-height: 100vh;

    font-family: PingFangSC-Regular, PingFang SC;
  }
  body{
    background-image:url('https://gitee.com/zyanggc/oss/raw/master/one-stop-nav/bg.body.jpg');
    background-size:cover;
    backdrop-filter: blur(10px);
  }
  button{
    outline:none;
    border:none;
    background: none;
    cursor:pointer;
  }
  a{
    text-decoration:none;
  }
  #root{
    /* background:#fff; */
    max-width:1200px;
    margin: 0 auto;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 60px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 70px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 80px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 90px;
      }
  }
  @media screen and (min-width: 1000px){
      html {
          font-size: 100px;
      }
  }
`;

export default GlobalStyle;
