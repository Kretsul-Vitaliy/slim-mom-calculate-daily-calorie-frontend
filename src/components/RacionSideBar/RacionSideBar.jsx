import Container from '../Container';
import {
  BoxBg,
  DateTitle,
  NotRecomemendedTitle,
  PositionConteiner,
  SummaryWrapper,
  NotRecommendedWrapper,
  ListItemData,
} from './RacionSideBar.styled.jsx';

const RacionSideBar = ({ date = `06/20/2020` }) => {
  return (
    <BoxBg>
      <Container>
        <PositionConteiner>
          <SummaryWrapper>
            <DateTitle>Summary for {date}</DateTitle>
            <ul>
              <li>
                <ListItemData>Left</ListItemData>
              </li>
              <li>
                <ListItemData>Consumed</ListItemData>
              </li>
              <li>
                <ListItemData>Daily rate</ListItemData>
              </li>
              <li>
                <ListItemData>n% of normal</ListItemData>
              </li>
            </ul>
          </SummaryWrapper>
          <NotRecommendedWrapper>
            <NotRecomemendedTitle>Food not recommended</NotRecomemendedTitle>
            <p>Your diet will be displayed here</p>
          </NotRecommendedWrapper>
        </PositionConteiner>
      </Container>
    </BoxBg>
  );
};

export default RacionSideBar;
