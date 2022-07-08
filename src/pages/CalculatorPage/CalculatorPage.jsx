import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RacionSideBar from '../../components/RacionSideBar';

const CalculatorPage = () => {
  return (
    <>
      <Header />
      <div>
        CalculatorPage
        <div>
          <DailyCaloriesForm />
        </div>
        <RacionSideBar />
      </div>
    </>
  );
};

export default CalculatorPage;
