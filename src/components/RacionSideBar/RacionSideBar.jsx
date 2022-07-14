// import Container from '../Container';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';
import DailyNotRecommendedFood from '../DailyNotRecommendedFood/DailyNotRecommendedFood';
import { BoxBg, PositionConteiner } from './RacionSideBar.styled.jsx';

const RacionSideBar = ({ name = 'riko' }) => {
  return (
    <BoxBg>
      {/* <StyledConteiner> */}
      <PositionConteiner>
        {/* <User>
          <p>{name}</p>
          <button type="button">Exit</button>
        </User> */}
        <DailyCalorieIntake />
        <DailyNotRecommendedFood />
      </PositionConteiner>
      {/* </StyledConteiner> */}
    </BoxBg>
  );
};

export default RacionSideBar;
