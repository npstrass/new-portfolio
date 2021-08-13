import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap'); */
  
  html, body {
      font-family: 'Source Code Pro', monospace;      -webkit-font-smooting: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      width: 100%;
      background-color: #010400;
      color: #fff;
      font-size: 16px;
      margin: 0;

      background: linear-gradient(270deg, #003844, #00171f);
        background-size: 400% 400%;

        -webkit-animation: AnimationName 30s ease infinite;
        -moz-animation: AnimationName 30s ease infinite;
        animation: AnimationName 30s ease infinite;
      }

      @-webkit-keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      @-moz-keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      @keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
}

  * {
      margin: 0;
  }

  span {
    font-weight: 700;
  }

  @media (max-width: 430px) {
    :root {
      font-size: 12px;
    }
  }
   
`;
