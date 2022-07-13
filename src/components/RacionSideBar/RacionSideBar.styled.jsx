import styled from 'styled-components';
import '../../helpers/variables.css';

/*  Position*/

export const BoxBg = styled.div`
  @media screen and (max-width: 767px) {
    background-color: var(--page-secondary-color);
    max-width: 767px;
    height: 433px;
    left: 0px;
    top: 580px;
  }

  @media screen and (max-width: 768px) {
    height: 326px;
    left: 0px;
    top: 674px;
  }
`;

export const PositionConteiner = styled.div`
  padding-top: 40px;
`;

export const SummaryWrapper = styled.div`
  width: 285px;
  height: 152px;
  left: 20px;
  top: 620px;
`;

export const NotRecommendedWrapper = styled.div`
  width: 280px;
  height: 117px;
  left: 20px;
  top: 812px;
`;

/* Style of titles */
export const DateTitle = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  color: var(--text-main-color);

  width: 285px;
  height: 20px;
  left: 20px;
  top: 620px;

  margin-bottom: 20px;
`;

export const NotRecomemendedTitle = styled.h2`
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

/* List and his styles */

export const ListItemData = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: var(--text-secondary-color);
`;
