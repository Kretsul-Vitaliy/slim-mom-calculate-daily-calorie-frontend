import { Suspense, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { getUserInfoCurrent } from '../redux/user/userOperation';

import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DiaryPage from '../pages/DiaryPage';
import CalculatorPage from '../pages/CalculatorPage';
import GlobalStyle from '../theme/GlobalStyle.styled';

import Header from '../components/Header'

const MainPage = lazy(() =>
  import('../pages/MainPage' /* webpackChunkName: "Main_page" */)
);
const PublicRoute = lazy(() =>
  import(
    '../components/PublicRoute/PublicRoute' /* webpackChunkName: "Public__Route" */
  )
);
const PrivateRoute = lazy(() =>
  import(
    '../components/PrivateRoute/PrivateRoute' /* webpackChunkName: "Private__Route" */
  )
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoCurrent());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<h2>Loading</h2>}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted redirectTo="/calculator">
                <MainPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/calculator">
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <PublicRoute restricted redirectTo="/calculator">
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute redirectTo="/login">
                <DiaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="calculator"
            element={
              <PublicRoute restricted redirectTo="/login">
                <CalculatorPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>

      <ToastContainer autoClose={2500} />
    </>
  );
};

export default App;
