// import Container from '../Container';
import DailyCalorieIntake from './DailyCalorieIntake';
import DailyNotRecommendedFood from './DailyNotRecommendedFood';
import { BoxBg, PositionConteiner } from './RacionSideBar.styled.jsx';
// import { useSelector } from 'react-redux/es/exports.js';

const RightSideBar = ({ name = 'riko' }) => {
  // const kcalNorm = useSelector(state => state.user.userInfo.userData.calories);
  // const isLogged = useSelector(state => state.auth.isLogged);
  // console.log(!isLogged);
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
