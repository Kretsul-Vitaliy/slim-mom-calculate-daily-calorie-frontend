import styled from 'styled-components';
import backGroundTabl from '../../images/bg-pictures/tablet/sideBarLeaves768_1x.png';
import backGroundDes from '../../images/bg-pictures/desktop/deck-sidebar.png';
import '../../helpers/variables.css';
import Container from '../Container';

export const BoxBg = styled.div`
  min-width: 320px;
  height: 360px;
  background-color: var(--page-secondary-color);

  @media screen and (min-width: 768px) {
    max-width: 1279px;
    /* max-width: 1279px; */
    height: 326px;

    max-width: 1280px;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;
    /* position: absolute; */
    top: 0;
    bottom: 0;
    /* right: 0; */
    /* z-index: 10; */
  }
`;

export const StyledConteiner = styled(Container)`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const PositionConteiner = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 360px;

  @media screen and (min-width: 768px) {
    /* display: flex; */
    /* margin: 0 auto; */
    justify-content: center;
    height: 326px;

    padding-top: 80px;
    padding-bottom: 80px;

    flex-direction: row;
    align-items: center;

    background-position: bottom 0% right 5%;
    background-size: contain;
    background-repeat: no-repeat;

    background-image: url(${backGroundTabl});
  }

  @media screen and (min-width: 1280px) {
    display: block;
    /* flex-direction: column; */

    /* margin-right: 0px; */

    width: 517px;
    /* height: 1056px; */
    margin-top: -80px;
    height: calc(100vh + 126px);
    /* padding-top: 80px;
    padding-bottom: 40px; */

    background-image: url(${backGroundDes});
    /* background-attachment: scroll; */
    background-size: contain;
    background-position: 50% 50%;
    background-color: var(--page-secondary-color);

    padding-top: 0px;
    padding-bottom: 0px;

    border: 1px solid transparent;
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
