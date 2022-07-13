import styled from 'styled-components';
import '../../helpers/variables.css';

export const Wrapper = styled.div`
  width: 285px;
  height: 152px;
  left: 20px;
  top: 620px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 288px;
    height: 166px;

    margin: 0 0;
    margin-right: 80px;
  }
`;

export const Title = styled.h2`
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

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const ListItemData = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;

  color: var(--text-secondary-color);
`;
