import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';
import styles from './editar.module.css';

import { useForm } from 'react-hook-form';
import { useHttpClient } from '../../Hooks/http-hook';
import LoadingSpinner from '../../IUElements/LoadingSpinner';

const Editar = () => {
  const { id } = useParams();
  const [loadedFicha, setLoadedFicha] = useState();

  const [controller, setController] = useState(0);

  const { register, handleSubmit, reset } = useForm({});
  const { isLoading, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3000/api/fichas/${id}`,
          'GET',
        );
        setLoadedFicha(responseData);
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
        `http://localhost:3000/api/fichas/${id}`,
        'GET',
      );
      const version2 = responseData.__v;
      data_post.__v = version2;
      try {
        await sendRequest(
          `http://localhost:3000/api/fichas/${id}`,

          'PATCH',
          JSON.stringify(data_post),
          {
            'Content-Type': 'application/json',
          },
        );
      } catch (error) {}
      setController(Math.random());
    } catch (error) {}
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}

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
                  <div className="btn-post">
                    <button type="submit">Enviar</button>
                  </div>

                  <Box m={4}>
                    <Grid container spacing={2}>
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
