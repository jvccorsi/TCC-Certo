import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Button,
  Paper,
  Grid,
  Divider,
  TextField,
} from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';

import styles from './visualizar.module.css';

import { useHttpClient } from '../../Hooks/http-hook';
import LoadingSpinner from '../../IUElements/LoadingSpinner';
import { useFieldArray, useForm } from 'react-hook-form';

const Visualizar = () => {
  const [loadedFicha, setLoadedFicha] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { control, register } = useForm({
    defaultValues: {
      test: [{ firstName: 'Bill', lastName: 'Luo' }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'test', // unique name for your Field Array
    },
  );

  const { id } = useParams();

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3000/api/fichas/62893191483925959969a4ba`,
          'GET',
        );
        setLoadedFicha(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFichas();
  }, [sendRequest, id]);

  return (
    <section>
      {isLoading && <LoadingSpinner asOverlay />}

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
              <h1 className={styles.titulo_visualizar}>
                Atendimento - {atob(id)}
              </h1>
            </Grid>
            <Grid item xs={1}>
              <Link to="/home/listar">
                <Button variant="contained" color="success">
                  Voltar
                </Button>
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
              <Box m={4}>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  disabled
                  value={
                    loadedFicha.defaultValues.atendimento.centro_atendimento
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={
                    loadedFicha.defaultValues.atendimento.centro_atendimento
                  }
                />
                {loadedFicha.defaultValues.acompanhamento.dados.map(
                  (item, index) => (
                    <>
                      <p type="text" key={index}>
                        {' '}
                        {index}
                      </p>
                      <p type="text" key={index}>
                        {item.id}
                      </p>
                      <p type="text" key={index}>
                        {item.informante}
                      </p>
                    </>
                  ),
                )}
              </Box>

              {/* <FormProvider {...methods} defaultValues={defaultValues2}>
                <Atendimento desabiliar={true} />
                <Box mt={3}>
                  <Divider>Solicitante</Divider>
                </Box>
                <Solicitante desabiliar={true} />
                <Box mt={3}>
                  <Divider>Paciente</Divider>
                </Box>
                <Paciente desabiliar={true} />
                <Box mt={3}>
                  <Divider>Agente Toxico</Divider>
                </Box>
                <AgenteToxico desabiliar={true} />
                <Box mt={3}>
                  <Divider>Exposição</Divider>
                </Box>
                <Exposicao desabiliar={true} />
                <Box mt={6}>
                  <Divider>Outras informações</Divider>
                </Box>
                <OutrasInformacoes desabiliar={true} />
                <Acompanhamento desabiliar={true} />
                <Box mt={3}>
                  <Divider>Classificação final</Divider>
                </Box>
                <ClassificacaoFinal desabiliar={true} />
              </FormProvider> */}
            </Paper>
          )}
        </Box>{' '}
      </Container>
    </section>
  );
};

export default Visualizar;
