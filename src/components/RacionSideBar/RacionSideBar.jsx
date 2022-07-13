import Container from '../Container';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';
import DailyNotRecommendedFood from '../DailyNotRecommendedFood/DailyNotRecommendedFood';
import { BoxBg, PositionConteiner } from './RacionSideBar.styled.jsx';

const RacionSideBar = () => {
  return (
    <BoxBg>
      <Container>
        <PositionConteiner>
          <DailyCalorieIntake />
          <DailyNotRecommendedFood />
        </PositionConteiner>
      </Container>
    </BoxBg>
  );
};

export default RacionSideBar;
