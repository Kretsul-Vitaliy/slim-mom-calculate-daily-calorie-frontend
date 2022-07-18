import styled from 'styled-components';

import bgDesktop1x from '../../images/background/descktop/bg_descktop1x.png';
import bgDesktop2x from '../../images/background/descktop/bg_descktop2x.png';

import bgTablet1x from '../../images/background/tablet/bg_tablet1x.png';
import bgTablet2x from '../../images/background/tablet/bg_tablet2x.png';

const BackgroundWrapper = styled.div`
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: contain;
  height: 100vh;
  @media screen and (min-width: 768px) {
    background-image: url(${bgTablet1x});
    background-position: top right;
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${bgTablet2x});
    background-position: top right;
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesktop1x});
    background-position: top right;
  }
  @media (min-device-pixel-ratio: 2) and (min-width: 1280px),
    (min-resolution: 192dpi) and (min-width: 1280px),
    (min-resolution: 2dppx) and (min-width: 1280px) {
    background-image: url(${bgDesktop2x});
    background-position: top right;
  }
`;
export default BackgroundWrapper;
