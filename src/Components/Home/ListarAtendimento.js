import React, { useContext, useEffect, useState } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Modal, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import { useHttpClient } from '../Hooks/http-hook';
import LoadingSpinner from '../IUElements/LoadingSpinner';
import { AuthContext } from '../Hooks/AuthContext';

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
  //Variaveis
  const [open, setOpen] = React.useState(false);
  const [idExcluir, setidExcluir] = React.useState();
  const [deleted, setDeleted] = React.useState();
  const handleOpen = (id) => {
    setOpen(true);
    setidExcluir(id);
  };
  const handleClose = () => setOpen(false);
  const [loadedFicha, setLoadedFicha] = useState([]);
  const [rows, setRows] = useState([]);
  let navigate = useNavigate();
  const { isLoading, sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      width: 70,
    },
    {
      field: 'Centro',
      headerName: 'Centro',
      width: 130,
      valueGetter: (params) => {
        return params.row.atendimento.centro_atendimento;
      },
    },
    {
      field: 'Tipo Ficha',
      headerName: 'Tipo de Ficha ',
      width: 130,
      valueGetter: (params) => {
        return params.row.atendimento.ficha.tipo_ficha;
      },
    },
    {
      field: 'Exposicao',
      headerName: 'Exposicao',
      width: 130,
      valueGetter: (params) => {
        return params.row.atendimento.ficha.exposicao;
      },
    },
    {
      field: 'Solicitante',
      headerName: 'Solicitante',
      width: 100,
      valueGetter: (params) => {
        return params.row.solicitante.nome_solicitante;
      },
    },
    {
      field: 'Paciente',
      headerName: 'Paciente',
      width: 180,
      valueGetter: (params) => {
        return params.row.paciente.nome_paciente;
      },
    },

    {
      field: 'Detalhes',
      headerName: 'Detalhes',
      sortable: false,
      renderCell: (params) => {
        const onClickDetalhes = (e) => {
          navigate(`../visualizar/${params.id} `, {
            replace: true,
          });
          return JSON.stringify(params.id);
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
          navigate(`../editar/${params.id} `, {
            replace: true,
          });
          //Retorna o id da linha!
          return JSON.stringify(params.id);
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
          return handleOpen(params.id);
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

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3000/api/fichas`,
          'GET',
        );
        setLoadedFicha(responseData);

        setRows(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFichas();
  }, [sendRequest, deleted]);

  const deletedPlace = async () => {
    handleClose();
    try {
      await sendRequest(
        `http://localhost:3000/api/fichas/${idExcluir}`,
        'DELETE',
        null,
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        },
      );
      setDeleted(Math.random());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tem certeza que deseja excluir o atendimento {idExcluir} ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box m={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={deletedPlace}
                >
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
      {!isLoading && loadedFicha && (
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
                  getRowId={(row) => row._id}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ListarAtendimento;
