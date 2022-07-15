import { createGlobalStyle } from 'styled-components';

import bgDesktopBananas1x from '../images/background/descktop/descktopBananas1x.png';
import bgDesktopBananas2x from '../images/background/descktop/descktopBananas2x.png';
import bgDesktopLetters1x from '../images/background/descktop/descktopLetters1x.png';
import bgDesktopLetters2x from '../images/background/descktop/descktopLetters2x.png';
import bgDesktopStrawberry1x from '../images/background/descktop/descktopStrawberry1x.png';
import bgDesktopStrawberry2x from '../images/background/descktop/descktopStrawberry2x.png';
import bgDesktopWave1x from '../images/background/descktop/descktopWave1x.png';
import bgDesktopWave2x from '../images/background/descktop/descktopWave2x.png';

import bgTabletBananas1x from '../images/background/tablet/tabletBananas1x.png';
import bgTabletBananas2x from '../images/background/tablet/tabletBananas2x.png';
import bgTabletLetters1x from '../images/background/tablet/tabletLetters1x.png';
import bgTabletLetters2x from '../images/background/tablet/tabletLetters2x.png';
import bgTabletStrawberry1x from '../images/background/tablet/tabletStrawberry1x.png';
import bgTabletStrawberry2x from '../images/background/tablet/tabletStrawberry2x.png';
import bgTabletWave1x from '../images/background/tablet/tabletWave1x.png';
import bgTabletWave2x from '../images/background/tablet/tabletWave2x.png';

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

// Backgraund image
    background-repeat: no-repeat;
    background-attachment: fixed;
  @media screen and (min-width: 768px) {
    background-image: url(${bgTabletBananas1x}), url(${bgTabletLetters1x}), url(${bgTabletStrawberry1x}), url(${bgTabletWave1x});
    background-position: bottom right, bottom 279px center, bottom 279px right, bottom right;
   }
  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${bgTabletBananas2x}), url(${bgTabletLetters2x}), url(${bgTabletStrawberry2x}), url(${bgTabletWave2x});
    /* background-position: bottom right, bottom 279px center, bottom 279px right, bottom right; */
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesktopBananas1x}), url(${bgDesktopLetters1x}), url(${bgDesktopStrawberry1x}), url(${bgDesktopWave1x});
    background-position: top right, top center, bottom 65px right 36px, bottom right;
           }
  @media (min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px),
    (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${bgDesktopBananas2x}), url(${bgDesktopLetters2x}), url(${bgDesktopStrawberry2x}), url(${bgDesktopWave2x});
    background-position: top right, top center, bottom 65px right 36px, bottom right;
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
