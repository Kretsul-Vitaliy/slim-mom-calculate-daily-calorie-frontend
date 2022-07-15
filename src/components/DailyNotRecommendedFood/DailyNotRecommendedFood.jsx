import { Wrapper, Title, Text } from './DailyNotRecommendedFood.styled.jsx';

const DailyNotRecommendedFood = ({ diet }) => {
  return (
    <Wrapper style={{}}>
      <Title>Food not recommended</Title>
      <Text>
        {diet ? (
          <Text>{diet}</Text>
        ) : (
          <Text>Your diet will be displayed here</Text>
        )}
      </Text>
    </Wrapper>
  );
};

export default DailyNotRecommendedFood;
