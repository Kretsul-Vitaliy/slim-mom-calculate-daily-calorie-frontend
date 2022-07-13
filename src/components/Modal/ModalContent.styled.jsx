import styled from 'styled-components';

const Title = styled.h2`
  font-family: Verdana-Bold;
  font-size: 18px;
  line-height: 1.4;
  color: var(--text-main-color);
  margin-top: 0;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media only screen and (min-width: 769px) {
    font-size: 26px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 20px;
  }
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 48px;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.04em;
  margin-top: 0;
  margin-bottom: 32px;
  color: var(--calories-diary-color);
  @media only screen and (min-width: 769px) {
    line-height: 1.2;
  }
`;
const TitleList = styled.ol`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--text-main-color);
  padding: 0;
  @media only screen and (min-width: 769px) {
    margin-top: 12px;
  }
`;
const List = styled.ol`
  font-family: Verdana;
  margin-bottom: 40px;
  padding-left: 22px;
  color: var(--text-secondary-color);
`;
const Line = styled.div`
  border: 1px solid #e0e0e0;
`;
const Item = styled.li`
  margin-top: 20px;
  color: var(--text-secondary-color);
`;
const ButtonClose = styled.button`
  display: none;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: white;
  position: absolute;
  top: 24px;
  right: 24px;

  @media only screen and (min-width: 769px) {
    display: block;
  }
`;

export { Title, List, Text, TitleList, Item, Line, ButtonClose };
