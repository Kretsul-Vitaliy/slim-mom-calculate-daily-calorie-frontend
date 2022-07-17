// import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfoCurrent } from '../../redux/user';
import {DailyCaloriesForm, RightSideBar} from '../../components';
import { Wrapper } from './CalculatorPage.styled';

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
