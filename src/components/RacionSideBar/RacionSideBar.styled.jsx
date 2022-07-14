import styled from 'styled-components';
import backGroundTabl from '../../images/bg-pictures/tablet/sideBarLeaves768_1x.png';
import '../../helpers/variables.css';

export const BoxBg = styled.div`
  min-width: 320px;
  min-height: 360px;
  background-color: var(--page-secondary-color);

  @media screen and (min-width: 768px) {
    min-width: 768px;
    max-width: 1279px;
    height: 326px;

    max-width: 1280px;
    height: 326px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;

    width: 517px;
    height: 850px;
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
    padding-top: 80px;
    padding-bottom: 80px;

    flex-direction: row;
    align-items: center;

    background-position: bottom 0% right -10%;
    background-size: contain;
    background-repeat: no-repeat;

    background-image: url(${backGroundTabl});
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;

    /* width: 517px; */
    height: 850px;
  }
`;

export const User = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
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
