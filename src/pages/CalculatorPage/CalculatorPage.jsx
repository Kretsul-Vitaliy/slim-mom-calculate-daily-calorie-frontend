// import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfoCurrent } from '../../redux/user';
import { DailyCaloriesForm, RightSideBar } from '../../components';
import { Wrapper } from './CalculatorPage.styled';
import { useSelector } from 'react-redux';
import { getIsAuthenticated, getIsUserAuthorizate } from '../../redux/auth';
const CalculatorPage = () => {
  const dispatch = useDispatch();
  const persistToken = useSelector(getIsUserAuthorizate);
  const isAuth = useSelector(getIsAuthenticated);

  useEffect(() => {
    isAuth && dispatch(getUserInfoCurrent(persistToken));
  }, [dispatch, isAuth, persistToken]);
  return (
    <>
      <Wrapper>
        <DailyCaloriesForm />
        {isAuth && <RightSideBar />}
      </Wrapper>
    </>
  );
};

export default CalculatorPage;
