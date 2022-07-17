// import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfoCurrent } from '../../redux/user';
import { DailyCaloriesForm, RightSideBar } from '../../components';
import { Wrapper } from './CalculatorPage.styled';
import { useSelector } from 'react-redux';
import { getIsUserAuthorizate } from '../../redux/auth';
const CalculatorPage = () => {
  const dispatch = useDispatch();
  const persistToken = useSelector(getIsUserAuthorizate);

  useEffect(() => {
    dispatch(getUserInfoCurrent(persistToken));
  }, [dispatch, persistToken]);
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
