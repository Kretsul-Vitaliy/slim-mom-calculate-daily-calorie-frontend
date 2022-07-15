// import Header from '../../components/Header';
import DailyCaloriesForm from '../../components/DailyCaloriesForm';
import RightSideBar from '../../components/RightSideBar';
import { Wrapper } from './CalculatorPage.styled';
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
      <Wrapper>
        <DailyCaloriesForm />
        <RightSideBar />
      </Wrapper>
    </>
  );
};

export default CalculatorPage;
