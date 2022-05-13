import React from 'react';
import { useParams } from 'react-router';

const Editar = () => {
  const { id } = useParams();
  return (
    <>
      <p> editando id: {atob(id)} </p>
    </>
  );
};

export default Editar;
