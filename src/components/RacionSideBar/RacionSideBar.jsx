// import Container from '../Container';
import DailyCalorieIntake from './DailyCalorieIntake';
import DailyNotRecommendedFood from './DailyNotRecommendedFood';
import { BoxBg, PositionConteiner } from './RacionSideBar.styled.jsx';

const RacionSideBar = ({ name = 'riko' }) => {
  return (
    <BoxBg>
      <PositionConteiner>
        <DailyCalorieIntake />
        <DailyNotRecommendedFood />
      </PositionConteiner>
    </BoxBg>
  );
};

export default RacionSideBar;
