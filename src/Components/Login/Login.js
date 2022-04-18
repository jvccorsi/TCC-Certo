import React, { useState, useCallback } from 'react';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import { Route, Routes } from 'react-router-dom';

import CreateAccount from './CreateAccount';
import Home from '../Home/Home';
import { AuthContext } from '../Hooks/AuthContext';
import Header from '../Header';

const Login = () => {
  const [isLoggedIn, setIsLogged] = useState(false);
  const login = useCallback(() => {
    setIsLogged(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogged(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        {' '}
        <Route path="/" element={<Home></Home>}></Route>{' '}
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
        navigate('/');
      </>
    );
  }
  return (
    <section>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <Header></Header>

        <Routes>{routes}</Routes>
      </AuthContext.Provider>
    </section>
  );
};

export default Login;
