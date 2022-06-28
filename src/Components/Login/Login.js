import React, { useState, useCallback, useEffect } from 'react';
import LoginForm from './LoginForm';

import { Route, Routes } from 'react-router-dom';

import CreateAccount from './CreateAccount';
import Home from '../Home/Home';
import { AuthContext } from '../Hooks/AuthContext';
import Header from '../Header';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ForgotPasswordForm/ResetPassword';

let logoutTimer;

const Login = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserID] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserID(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      }),
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserID(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [logout, token, tokenExpirationDate]);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('userData'));
    if (
      storeData &&
      storeData.token &&
      new Date(storeData.expiration) > new Date()
    ) {
      login(storeData.userId, storeData.token, new Date(storeData.expiration));
    }
  }, [login]);

  let routes;

  if (token) {
    routes = (
      <>
        {' '}
        <Route path="" element={<Home></Home>}></Route>{' '}
        <Route path="home/*" element={<Home></Home>}></Route>{' '}
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        <Route
          path="create-account"
          element={<CreateAccount></CreateAccount>}
        ></Route>
        <Route
          path="/reset-password/:tokenUsuario/:idUsuario"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route
          path="forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
      </>
    );
  }
  return (
    <section>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Header></Header>

        <Routes>{routes}</Routes>
      </AuthContext.Provider>
    </section>
  );
};

export default Login;
