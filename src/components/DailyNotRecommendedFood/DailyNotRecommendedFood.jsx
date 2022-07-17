import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Text } from './DailyNotRecommendedFood.styled.jsx';

const DailyNotRecommendedFood = ({ diet }) => {
  const { t } = useTranslation();

  return (
    <Wrapper style={{}}>
      <Title>{t?.('dnrf.title')}</Title>
      <div>
        {diet ? <Text>{diet}</Text> : <Text>{t?.('dnrf.displayedDiet')}</Text>}
      </div>
    </Wrapper>
  );
};

export default DailyNotRecommendedFood;
