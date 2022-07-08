import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #010101;
    line-height: 1.5;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  
  @font-face {
  font-family: "GothamPro-Bold";
  src: url("./fonts/GothamPro-Bold.woff");
}

@font-face {
  font-family: "GothamPro-Light";
  src: url("./fonts/GothamPro-Light.woff");
}

@font-face {
  font-family: "GothamPro";
  src: url("./fonts/GothamPro.woff");
}

@font-face {
  font-family: "Verdana-Bold";
  src: url("./fonts/Verdana-Bold.woff");
}

@font-face {
  font-family: "Verdana";
  src: url("./fonts/Verdana.woff");
}

/* #root {
  --extra-color: #fc842d;
  --page-bgcolor: #e5e5e5;
  --page-secondary-color: #f0f1f3;
  --text-main-color: #212121;
  --text-secondary-color: #9b9faa;
  --text-extra-btn-color: #fff;
  --calories-diary-color: #264061;
  --header-divider-color: #e0e0e0;
  --color-white: #ffffff;
  --transition: all 250ms linear;
  --color-disabled: rgba(252, 132, 45, 0.5);
} */
`;
export default GlobalStyle;
