import Container from '../Container';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';
import DailyNotRecommendedFood from '../DailyNotRecommendedFood/DailyNotRecommendedFood';
import { BoxBg, PositionConteiner, User } from './RacionSideBar.styled.jsx';

const RacionSideBar = ({ name = 'riko' }) => {
  return (
    <BoxBg>
      <Container>
        <PositionConteiner>
          <User>
            <p>{name}</p>
            <button type="button">Exit</button>
          </User>
          <DailyCalorieIntake />
          <DailyNotRecommendedFood />
        </PositionConteiner>
      </Container>
    </BoxBg>
  );
};

export default RacionSideBar;
