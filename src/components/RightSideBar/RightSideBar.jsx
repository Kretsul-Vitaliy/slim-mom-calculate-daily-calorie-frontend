import DailyCalorieIntake from './DailyCalorieIntake';
import DailyNotRecommendedFood from './DailyNotRecommendedFood';
import { BoxBg, PositionConteiner } from './RacionSideBar.styled.jsx';

const RightSideBar = () => {
  return (
    <BoxBg>
      <PositionConteiner>
        <DailyCalorieIntake />
        <DailyNotRecommendedFood />
      </PositionConteiner>
    </BoxBg>
  );
};

export default RightSideBar;
