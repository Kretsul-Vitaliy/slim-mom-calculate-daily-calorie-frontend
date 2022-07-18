import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Text } from './DailyNotRecommendedFood.styled.jsx';
// import {} from '';
import { useSelector } from 'react-redux/es/exports.js';

const DailyNotRecommendedFood = ({ diet }) => {
  const food = useSelector(
    state => state.user?.userInfo?.userData?.notAllowedProductsAll
  );
  console.log({ food });
  const { t } = useTranslation();

  return (
    <Wrapper style={{}}>
      <Title>{t?.('dnrf.title')}</Title>
      <Text>
        {food ? (
          <Text>
            {food.map(item => (
              <Text>{item}</Text>
            ))}
          </Text>
        ) : (
          <Text>{t?.('dnrf.displayedDiet')}</Text>
        )}
      </Text>
    </Wrapper>
  );
};

export default DailyNotRecommendedFood;
