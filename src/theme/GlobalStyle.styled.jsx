import { createGlobalStyle } from 'styled-components';

import bgDesktop1x from '../images/background/background-desktop.jpg';
import bgDesktop2x from '../images/background/background-desktop@2x.jpg';
import bgTablet1x from '../images/background/background-tablet.jpg';
import bgTablet2x from '../images/background/background-tablet@2x.jpg';

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

// Backgraund image
    background-repeat: no-repeat;
    background-size: cover;
    position: top center;
    background-attachment: fixed;
       @media screen and (min-width: 768px) {
    background-image: url(${bgTablet1x});
   }
  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${bgTablet2x});
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesktop1x});
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px),
    (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${bgDesktop2x});
  }
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
  
 


`;
export default GlobalStyle;
