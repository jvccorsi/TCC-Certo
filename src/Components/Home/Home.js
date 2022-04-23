import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroAtendimento from './CadastroAtendimento';
import ListarAtendimento from './ListarAtendimento';

import HomePage from './HomePage';
import UserHeader from './UserHeader';

const Home = () => {
  return (
    <section>
      <UserHeader></UserHeader>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route
          path="/cadastro"
          element={<CadastroAtendimento></CadastroAtendimento>}
        ></Route>
        <Route
          path="/listar"
          element={<ListarAtendimento></ListarAtendimento>}
        ></Route>
      </Routes>
    </section>
  );
};

export default Home;
