import { Suspense, useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { getCurrentUser } from '../redux/auth/authOperation';

import {
  LoginPage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from '../pages';

import GlobalStyle from '../theme/GlobalStyle.styled';
import { SwitcherButton } from '../theme/SwitcherButton.js';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme/theme';
// import {
//   SwitcherButtonStyles,
//   SpanImg,
//   SpanImgDark,
// } from '../theme/SwitcherButton.Styled';

import {
  Header,
  Loader,
  AuthorizeGoogle,
  BackgroundContainer,
  Container,
} from '../components';
import {
  getIsAuthenticated,
  getIsUserRefreshToken,
  getSid,
} from '../redux/auth/authSelector';
import { authRefresh } from '../redux/auth/authOperation';
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
  const [theme, setTheme] = useState('light');
  const isAuth = useSelector(getIsAuthenticated);
  const refreshToken = useSelector(getIsUserRefreshToken);
  const sid = useSelector(getSid);

  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  useEffect(() => {
    isAuth &&
      setTimeout(() => {
        dispatch(authRefresh(refreshToken, sid));
      }, process.env.REACT_APP_TOKEN_LIFE);
  }, [dispatch, isAuth, refreshToken, sid]);

  useEffect(() => {
    !isAuth && refreshToken && dispatch(authRefresh(refreshToken, sid));
  }, [dispatch, isAuth, refreshToken, sid]);

  return (
    <Container>
      <BackgroundContainer>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Suspense fallback={<Loader />}>
            <SwitcherButton switchTheme={setTheme} />
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute redirectTo="/calculator">
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
                  <PublicRoute redirectTo="/login">
                    <CalculatorPage />
                  </PublicRoute>
                }
              />
              <Route
                path="google"
                element={
                  <PublicRoute restricted redirectTo="/login">
                    <CalculatorPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
            <AuthorizeGoogle />
            <Outlet />
          </Suspense>

          <ToastContainer autoClose={2500} />
        </ThemeProvider>
      </BackgroundContainer>
    </Container>
  );
};

export default App;
