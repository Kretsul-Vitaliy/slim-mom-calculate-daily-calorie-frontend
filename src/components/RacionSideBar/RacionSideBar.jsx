import Container from '../Container';
import {
  BoxBg,
  DateTitle,
  NotRecomemendedTitle,
  PositionConteiner,
  SummaryWrapper,
  NotRecommendedWrapper,
  NotRecomemendedData,
  ListItemData,
  ListItem,
  List,
} from './RacionSideBar.styled.jsx';

const RacionSideBar = ({ date = `06/20/2020`, kcal = 600 }) => {
  return (
    <BoxBg>
      <Container>
        <PositionConteiner>
          <SummaryWrapper>
            <DateTitle>Summary for {date}</DateTitle>
            <List>
              <ListItem>
                <ListItemData>Left</ListItemData>
                <ListItemData>{kcal} kcal</ListItemData>
              </ListItem>
              <ListItem>
                <ListItemData>Consumed</ListItemData>
                <ListItemData>{kcal} kcal</ListItemData>
              </ListItem>
              <ListItem>
                <ListItemData>Daily rate</ListItemData>
                <ListItemData>{kcal} kcal</ListItemData>
              </ListItem>
              <ListItem>
                <ListItemData>n% of normal</ListItemData>
                <ListItemData>{kcal} kcal</ListItemData>
              </ListItem>
            </List>
          </SummaryWrapper>
          <NotRecommendedWrapper>
            <NotRecomemendedTitle>Food not recommended</NotRecomemendedTitle>
            <NotRecomemendedData>
              Your diet will be displayed here
            </NotRecomemendedData>
          </NotRecommendedWrapper>
        </PositionConteiner>
      </Container>
    </BoxBg>
  );
};

export default RacionSideBar;
