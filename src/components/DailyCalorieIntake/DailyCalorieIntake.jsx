import { Link } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
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
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <ModalContent>
      <Title>Your recommended daily calorie intake is</Title>
      {calories ? <Text>{calories} cal</Text> : null}
      <Line />
      <TitleList>Foods you should not eat</TitleList>
      {products?.lenght !== 0 ? (
        <List>
          {products?.map(product => (
            <Item>{product}</Item>
          ))}
        </List>
      ) : (
        <p>rerre</p>
      )}
      {isAuthenticated ? (
        <Link to="/diary">
          <Button type="button" size="long">
            Start losing weight
          </Button>
        </Link>
      ) : (
        <Link to="/signup">
          <Button type="button" size="long">
            Start losing weight
          </Button>
        </Link>
      )}
    </ModalContent>
  );
};

export default DailyCalorieIntake;
