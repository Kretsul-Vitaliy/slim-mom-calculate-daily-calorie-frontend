import {
  Wrapper,
  Title,
  List,
  ListItem,
  ListItemData,
} from './DailyCalorieIntake.slyled.jsx';

const DailyCalorieIntake = ({ date = `06/20/2020`, kcal = '000' }) => {
  return (
    <Wrapper>
      <Title>Summary for {date}</Title>
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
    </Wrapper>
  );
};

export default DailyCalorieIntake;
