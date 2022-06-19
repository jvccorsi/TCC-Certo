import React, { useState, useCallback } from 'react';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import { Route, Routes } from 'react-router-dom';

import CreateAccount from './CreateAccount';
import Home from '../Home/Home';
import { AuthContext } from '../Hooks/AuthContext';
import Header from '../Header';

const Login = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserID] = useState(false);
  const login = useCallback((uid, token) => {
    setToken(token);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: uid, token: token }),
    );
    setUserID(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserID(null);
  }, []);

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
          path="reset-password"
          element={<ResetPassword></ResetPassword>}
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
