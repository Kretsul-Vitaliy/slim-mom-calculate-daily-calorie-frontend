import { Link } from 'react-router-dom';
import {
  ModalContent,
  Title,
  Text,
  Line,
  TitleList,
  List,
  Item,
} from './DailyCalorieIntake.styled';
import Button from '../Button';
const DailyCalorieIntake = ({ calories, products }) => {
  return (
    <ModalContent>
      <Title>Your recommended daily calorie intake is</Title>
      <Text>{calories} cal</Text>
      <Line />
      <TitleList>Foods you should not eat</TitleList>
      <List>
        {products.map(product => (
          <Item>{product}</Item>
        ))}
      </List>
      <Link to="/signup">
        <Button type="button" size="long">
          Start losing weight
        </Button>
      </Link>
    </ModalContent>
  );
};

export default DailyCalorieIntake;
