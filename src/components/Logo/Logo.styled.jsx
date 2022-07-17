import styled from 'styled-components';

const Picture = styled.picture`
  img {
    padding: 20px 0 16px 20px;
    @media screen and (max-width: 767px) {
      width: 47px;
      height: 44px;
      padding: 0;
      transform: translate(0, 40%);
    }
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 162px;
    }
    @media screen and (min-width: 1280px) {
      width: 167px;
      height: 66px;
      padding: unset;
    }
  }
`;

export { Picture };
