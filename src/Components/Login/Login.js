import React from 'react';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Error404 from '../Error404';
import Home from '../Home/Home';
// import style_login from './Login.module.css';

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        <Route
          path="create-account"
          element={<CreateAccount></CreateAccount>}
        ></Route>
        <Route
          path="reset-password"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route path="home/*" element={<Home></Home>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>{' '}
      </Routes>
    </section>
  );
};

export default Login;
