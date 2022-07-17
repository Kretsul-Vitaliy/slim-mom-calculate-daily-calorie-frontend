import { createGlobalStyle } from 'styled-components';

import bgDesktop1x from '../images/background/descktop/bg_descktop1x.png';
import bgDesktop2x from '../images/background/descktop/bg_descktop2x.png';

import bgTablet1x from '../images/background/tablet/bg_tablet1x.png';
import bgTablet2x from '../images/background/tablet/bg_tablet2x.png';

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
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    line-height: 1.5;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: .3s ease;

    //bg-image
  background-repeat: no-repeat;
  background-attachment: scroll;
  @media screen and (min-width: 768px) {
    background-image: url(${bgDesktop1x});
    background-position: top right;
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${bgDesktop2x});
    background-position: top right;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgTablet1x});
    background-position: top right;
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px),
    (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${bgTablet2x});
    background-position: top right;
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
