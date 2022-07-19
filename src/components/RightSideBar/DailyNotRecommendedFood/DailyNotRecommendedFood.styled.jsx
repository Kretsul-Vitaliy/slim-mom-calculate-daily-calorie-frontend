import styled from 'styled-components';
import '../../../helpers/variables.css';

export const Wrapper = styled.div`
  width: 280px;
  height: 104px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin-left: 0;

    width: 288px;
    height: 166px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: var(--text-main-color);

  width: 280px;
  height: 20px;
  left: 20px;
  top: 812px;

  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: var(--text-secondary-color);
`;
