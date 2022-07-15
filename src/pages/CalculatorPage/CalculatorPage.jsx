<<<<<<< HEAD
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RacionSideBar from '../../components/RacionSideBar';
import { Wrapper } from './CalculatorPage.styled';
=======
// import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfoCurrent } from '../../redux/user/userOperation';
>>>>>>> main

const CalculatorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoCurrent());
  }, [dispatch]);
  return (
    <>
<<<<<<< HEAD
      <Wrapper>
        <DailyCaloriesForm />
        <RacionSideBar />
      </Wrapper>
=======
      {/* <Header /> */}
      <div>
        {/* CalculatorPage */}
        <div>
          <DailyCaloriesForm />
        </div>
        <RightSideBar />
      </div>
>>>>>>> main
    </>
  );
};

export default CalculatorPage;
