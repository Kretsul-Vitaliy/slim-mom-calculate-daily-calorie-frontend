import styled from 'styled-components';
import '../../helpers/variables.css';
import backGround from '../../images/bg-pictures/tablet/sideBarLeaves768_1x.png';

export const BoxBg = styled.div`
  min-width: 320px;
  min-height: 360px;

  @media screen and (max-width: 767px) {
    background-color: var(--page-secondary-color);
    max-width: 767px;
    height: 433px;
    left: 0px;
    top: 580px;
  }

  @media screen and (min-width: 768px) {
    background-position: bottom 0px right -25px;
    background-color: var(--page-secondary-color);
    background-repeat: no-repeat;
    background-image: url(${backGround});
  }
`;

export const PositionConteiner = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 360px;

  @media screen and (min-width: 768px) {
    padding: 80px 0;
    flex-direction: row;
  }
`;

export const SummaryWrapper = styled.div`
  width: 285px;
  height: 152px;
  left: 20px;
  top: 620px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 166px;

    margin: 0 0;
    margin-right: 80px;
  }
`;

export const NotRecommendedWrapper = styled.div`
  width: 280px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 166px;
  }
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

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const List = styled.ul``;

export const NotRecomemendedData = styled(ListItemData)``;
