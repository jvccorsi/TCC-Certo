import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CadastroAtendimento from './CadastroAtendimento';
import ListarAtendimento1 from './ListarAtendimento';
import Editar from './editar/editar';

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
          element={<ListarAtendimento1></ListarAtendimento1>}
        ></Route>
        <Route path="/editar/:id" element={<Editar></Editar>}></Route>
      </Routes>
    </section>
  );
};

export default Home;
