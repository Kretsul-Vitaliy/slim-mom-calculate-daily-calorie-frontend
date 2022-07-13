// import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RacionSideBar from '../../components/RacionSideBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfoCurrent } from '../../redux/user/userOperation';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoCurrent());
  }, [dispatch]);
  return (
    <>
      {/* <Header /> */}
      <div>
        {/* CalculatorPage */}
        <div>
          <DailyCaloriesForm />
        </div>
        <RacionSideBar />
      </div>
    </>
  );
};

export default CalculatorPage;
