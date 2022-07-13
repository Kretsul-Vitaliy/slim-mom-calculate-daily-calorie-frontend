import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RacionSideBar from '../../components/RacionSideBar';
import { Wrapper } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <>
      <Wrapper>
        <DailyCaloriesForm />
        <RacionSideBar />
      </Wrapper>
    </>
  );
};

export default CalculatorPage;
