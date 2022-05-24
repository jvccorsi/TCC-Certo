import React, { useContext, useEffect, useState } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';
import styles from './editar.module.css';

import { Controller, useForm } from 'react-hook-form';
import { useHttpClient } from '../../Hooks/http-hook';
import LoadingSpinner from '../../IUElements/LoadingSpinner';
import { AuthContext } from '../../Hooks/AuthContext';

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
const categoria = [
  'Medico',
  'Enfermeiro',
  'Paciente',
  'Parente/familitar',
  'Estudante de Medicina',
  'Estudante de outra area da saude',
  'Estudante-Outro',
  'Farmaceutico',
  'Tecnico/Auxiliar de enfermagem',
  'Veterinario',
  'Outro profissional da saude',
  'Outro profissional',
  'Ignorado',
];
const FCWidth = {
  width: '20rem',
};

const Editar = () => {
  const { id } = useParams();
  const [loadedFicha, setLoadedFicha] = useState();
  const [controller, setController] = useState(0);
  const { register, handleSubmit, reset, control } = useForm({});
  const { isLoading, sendRequest, clearError, error } = useHttpClient();
  const [update, setUpdate] = useState(false);
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);

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
                          Editor:{' '}
                          <b style={{ color: '#0072FF' }}>{auth.userId}</b>
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

                      <Grid item xs={6}>
                        <Controller
                          name="solicitante.categoria_multiple_select"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="solicitante">
                                Solicitante
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="solicitante"
                                label="solicitante"
                                multiple
                                defaultValue={[]}
                              >
                                {categoria.map((age) => (
                                  <MenuItem value={age} key={age}>
                                    {age}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.data_atendimento"
                          render={({ field }) => (
                            <TextField
                              id="data_atendimento"
                              variant="outlined"
                              placeholder="Data do atendimento"
                              {...field}
                              type="date"
                            />
                          )}
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
