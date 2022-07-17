import { Suspense, useEffect, useState, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getCurrentUser } from '../redux/auth/authOperation';

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
// import { BackgroundContainer } from '../components/BackgroundContainer/BackgroundContainer';
import {
  SwitcherButtonStyles,
  SpanImg,
  SpanImgDark,
} from '../theme/SwitcherButton.Styled';

import {
  Header,
  Loader,
  AuthorizeGoogle,
  BackgroundContainer,
} from '../components';

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
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <BackgroundContainer>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Suspense fallback={<Loader />}>
          <SwitcherButtonStyles onClick={switchTheme} type="submit">
            {theme === 'light' ? (
              <SpanImg></SpanImg>
            ) : (
              <SpanImgDark></SpanImgDark>
            )}
          </SwitcherButtonStyles>
          {/* <SwitcherButton /> */}
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
  );
};

export default App;
