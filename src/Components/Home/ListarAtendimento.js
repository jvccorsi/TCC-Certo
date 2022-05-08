import React from 'react';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridApi,
  GridCellValue,
  GridToolbar,
} from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Centro', headerName: 'Centro', width: 130 },
  { field: 'TipoFicha', headerName: 'Tipo de Ficha ', width: 130 },
  { field: 'Exposicao', headerName: 'Exposicao', width: 130 },

  {
    field: 'Detalhes',
    headerName: 'Detalhes',
    sortable: false,
    renderCell: (params) => {
      const onClickDetalhes = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        //Retorna o id da linha!
        return alert(JSON.stringify(thisRow.id));
      };

      return (
        <Button variant="contained" color="success" onClick={onClickDetalhes}>
          Ver mais
        </Button>
      );
    },
  },

  {
    field: 'Editar',
    headerName: 'Editar',
    sortable: false,
    renderCell: (params) => {
      const onClickEditar = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        //Retorna o id da linha!
        return alert(JSON.stringify(thisRow.id));
      };

      return (
        <Button variant="contained" color="warning" onClick={onClickEditar}>
          Editar
        </Button>
      );
    },
  },
  {
    field: 'Excluir',
    headerName: 'Excluir',
    sortable: false,
    renderCell: (params) => {
      const onClickExcluir = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        //Retorna o id da linha!
        return alert(JSON.stringify(thisRow.id));
      };

      return (
        <Button variant="contained" color="error" onClick={onClickExcluir}>
          Excluir
        </Button>
      );
    },
  },
];

const rows = [
  { id: 1, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  { id: 2, Centro: 'xx-corsi02', TipoFicha: 'is Awesome', Exposicao: 'Teste1' },
  { id: 3, Centro: 'xx-corsi03', TipoFicha: 'is Amazing', Exposicao: 'Teste1' },
  { id: 4, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  { id: 5, Centro: 'xx-corsi01', TipoFicha: 'is Awesome', Exposicao: 'Teste1' },
  { id: 6, Centro: 'xx-corsi01', TipoFicha: 'is Amazing', Exposicao: 'Teste1' },
  { id: 7, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  { id: 8, Centro: 'xx-corsi01', TipoFicha: 'is Awesome', Exposicao: 'Teste1' },
  { id: 9, Centro: 'xx-corsi01', TipoFicha: 'is Amazing', Exposicao: 'Teste1' },
  { id: 10, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  {
    id: 11,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Awesome',
    Exposicao: 'Teste1',
  },
  {
    id: 12,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  { id: 13, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  {
    id: 14,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Awesome',
    Exposicao: 'Teste1',
  },
  {
    id: 15,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  { id: 16, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  {
    id: 17,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Awesome',
    Exposicao: 'Teste1',
  },
  {
    id: 18,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  { id: 19, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
  {
    id: 20,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Awesome',
    Exposicao: 'Teste1',
  },
  {
    id: 21,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  {
    id: 22,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Awesome',
    Exposicao: 'Teste1',
  },
  {
    id: 23,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  {
    id: 25,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Awesome',
    Exposicao: 'Teste1',
  },
  {
    id: 26,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  {
    id: 27,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  {
    id: 28,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  {
    id: 29,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
  {
    id: 30,
    Centro: 'xx-corsi01',
    TipoFicha: 'is Amazing',
    Exposicao: 'Teste1',
  },
];

const ListarAtendimento = () => {
  return (
    <>
      <Box mt={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <div style={{ height: '80vh', width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ListarAtendimento;
