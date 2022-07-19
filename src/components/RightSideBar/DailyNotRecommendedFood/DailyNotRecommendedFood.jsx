import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Text } from './DailyNotRecommendedFood.styled.jsx';
// import {} from '';
// import { useSelector } from 'react-redux/es/exports.js';
import { useSelector } from 'react-redux';
import { getUserCategories } from '../../../redux/user/userSelector.js';
import { nanoid } from 'nanoid';
const DailyNotRecommendedFood = ({ diet }) => {
  const food = useSelector(getUserCategories);
  // const food = useSelector(
  //   state => state.user?.userInfo?.userData?.notAllowedProductsAll
  // );
  // console.log({ food });
  const { t } = useTranslation();

  return (
    <Wrapper style={{}}>
      <Title>{t?.('dnrf.title')}</Title>
      <div>
        {food ? (
          <Text>
            {food.map(item => (
              <Text key={nanoid()}>{item}</Text>
            ))}
          </Text>
        ) : (
          <Text>{t?.('dnrf.displayedDiet')}</Text>
        )}
      </div>
    </Wrapper>
  );
};

export default DailyNotRecommendedFood;
