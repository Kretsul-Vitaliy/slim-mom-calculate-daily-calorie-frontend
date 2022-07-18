import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Text } from './DailyNotRecommendedFood.styled.jsx';

const DailyNotRecommendedFood = ({ diet }) => {
  const { t } = useTranslation();

  return (
    <Wrapper style={{}}>
      <Title>{t?.('dnrf.title')}</Title>
      <Text>
        {diet ? <Text>{diet}</Text> : <Text>{t?.('dnrf.displayedDiet')}</Text>}
      </Text>
    </Wrapper>
  );
};

export default DailyNotRecommendedFood;
