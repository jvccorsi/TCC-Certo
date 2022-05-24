import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Divider,
  Modal,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';
import styles from './editar.module.css';

import { useForm } from 'react-hook-form';
import { useHttpClient } from '../../Hooks/http-hook';
import LoadingSpinner from '../../IUElements/LoadingSpinner';

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

const Editar = () => {
  const { id } = useParams();
  const [loadedFicha, setLoadedFicha] = useState();
  const [controller, setController] = useState(0);
  const { register, handleSubmit, reset } = useForm({});
  const { isLoading, sendRequest, clearError, error } = useHttpClient();
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const [versionDoc, setVersionDoc] = useState();

  const handleClose = () => {
    setOpen(false);
    clearError();
  };

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `https://api-tcc-unicamp.herokuapp.com/api/fichas/${id}`,
          'GET',
        );
        setLoadedFicha(responseData);
        setVersionDoc(responseData.__v);
        reset(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFichas();
  }, [sendRequest, id, reset, controller]);

  const submitFormRequest = async (data) => {
    var data_post = data;
    try {
      const responseData = await sendRequest(
        `https://api-tcc-unicamp.herokuapp.com/api/fichas/${id}`,
        'GET',
      );
      const version2 = responseData.__v;
      data_post.__v = version2;

      try {
        await sendRequest(
          `https://api-tcc-unicamp.herokuapp.com/api/fichas/${id}`,
          'PATCH',
          JSON.stringify(data_post),
          {
            'Content-Type': 'application/json',
          },
        );
        setUpdate(true);
      } catch (err) {}
      setController(Math.random());
    } catch (err) {}
    setOpen(true);
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
          {update ? (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update realizado com sucesso!!
            </Typography>
          ) : (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ocorreu um erro!!
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {error}
              </Typography>
            </Typography>
          )}

          <Box maxWidth={false} mt={2}>
            <Button
              onClick={handleClose}
              variant="contained"
              color="success"
              size="small"
              className={styles.textfield_options}
            >
              Fechar
            </Button>
          </Box>
        </Box>
      </Modal>

      <section>
        <Container maxWidth="xl" fixed>
          <Box
            mt={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <ReceiptOutlinedIcon color="primary" fontSize="large" />

            <Grid container spacing={2}>
              <Grid item xs={11}>
                <h1 className={styles.titulo_visualizar}>Editar - {id}</h1>
              </Grid>
              <Grid item xs={1}>
                <Link to="/home/listar">
                  <Button variant="contained">Voltar</Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box mt={4} mb={5}>
            {!isLoading && loadedFicha && (
              <Paper
                elevation={12}
                style={{ maxHeight: '70vh', overflow: 'auto' }}
              >
                <form onSubmit={handleSubmit(submitFormRequest)}>
                  <Box m={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={11}>
                        <Typography variant="h6" component="h6">
                          Versão edição:{' '}
                          <b style={{ color: '#0072FF' }}>{versionDoc}</b>
                        </Typography>
                      </Grid>

                      <Grid item xs={1}>
                        <Button
                          variant="contained"
                          color="success"
                          type="submit"
                        >
                          Enviar
                        </Button>
                      </Grid>

                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider>Dados - Iniciar ficha</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="Centro Atendimento"
                          label="Centro Atendimento"
                          variant="standard"
                          fullWidth
                          {...register('atendimento.centro_atendimento')}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="Tipo de ficha"
                          label="Tipo de Ficha"
                          variant="standard"
                          fullWidth
                          {...register('atendimento.ficha.tipo_ficha')}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </Paper>
            )}{' '}
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Editar;
