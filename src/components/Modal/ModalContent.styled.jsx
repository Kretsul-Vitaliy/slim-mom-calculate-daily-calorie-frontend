import styled from "styled-components";

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  color: #212121;
  margin-top: 0;
  margin-bottom: 40px;
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
  color: #264061;
  @media only screen and (min-width: 769px) {
    line-height: 1.2;
  }
`;
const List = styled.ol`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #212121;
  @media only screen and (min-width: 769px) {
    margin-top: 12px;
  }
`;
const Line = styled.div`
  border: 1px solid #e0e0e0;
`;
const Item = styled.li`
  font-weight: 400;
  margin-top: 20px;
  color: #9b9faa;
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

export { Title, Text, List, Item, Line, ButtonClose };
