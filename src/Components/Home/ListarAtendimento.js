import React from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Modal, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListarAtendimento = () => {
  const [open, setOpen] = React.useState(false);
  const [idExcluir, setidExcluir] = React.useState();
  const handleOpen = (id) => {
    setOpen(true);
    setidExcluir(id);
  };
  const handleClose = () => setOpen(false);

  const rows = [
    { id: 1, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
    {
      id: 2,
      Centro: 'xx-corsi02',
      TipoFicha: 'is Awesome',
      Exposicao: 'Teste1',
    },
    {
      id: 3,
      Centro: 'xx-corsi03',
      TipoFicha: 'is Amazing',
      Exposicao: 'Teste1',
    },
    { id: 4, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
    {
      id: 5,
      Centro: 'xx-corsi01',
      TipoFicha: 'is Awesome',
      Exposicao: 'Teste1',
    },
    {
      id: 6,
      Centro: 'xx-corsi01',
      TipoFicha: 'is Amazing',
      Exposicao: 'Teste1',
    },
    { id: 7, Centro: 'xx-corsi01', TipoFicha: 'World', Exposicao: 'Teste1' },
    {
      id: 8,
      Centro: 'xx-corsi01',
      TipoFicha: 'is Awesome',
      Exposicao: 'Teste1',
    },
    {
      id: 9,
      Centro: 'xx-corsi01',
      TipoFicha: 'is Amazing',
      Exposicao: 'Teste1',
    },
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
  let navigate = useNavigate();
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
          navigate(`../visualizar/${btoa(JSON.stringify(thisRow.id))} `, {
            replace: true,
          });

          //Retorna o id da linha!
          return JSON.stringify(thisRow.id);
        };

        return (
          <IconButton
            aria-label="visualizar"
            color="success"
            onClick={onClickDetalhes}
            size="large"
          >
            <RemoveRedEyeSharpIcon />
          </IconButton>
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

          navigate(`../editar/${btoa(JSON.stringify(thisRow.id))} `, {
            replace: true,
          });

          //Retorna o id da linha!
          return JSON.stringify(thisRow.id);
        };

        return (
          <IconButton
            aria-label="editar"
            color="warning"
            onClick={onClickEditar}
            size="large"
          >
            <EditSharpIcon />
          </IconButton>
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

          // navigate(`../excluir/${JSON.stringify(thisRow.id)} `, {
          //   replace: true,
          // });
          // return handleOpen();

          return handleOpen(JSON.stringify(thisRow.id));
          // return alert(JSON.stringify(thisRow.id));
        };

        return (
          <IconButton
            aria-label="delete"
            color="error"
            onClick={onClickExcluir}
            size="large"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tem certeza que deseja excluir o modal {idExcluir} ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box m={2}>
                <Button variant="contained" color="error">
                  Sim
                </Button>
              </Box>

              <Button variant="contained" color="success" onClick={handleClose}>
                Não
              </Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
      <Box m={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={8}>
            <div style={{ height: '65vh', width: '100%' }}>
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
