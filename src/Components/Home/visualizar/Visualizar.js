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
import Atendimento from '../Stepper/Forms/Atendimento';

const Visualizar = () => {
  const [loadedFicha, setLoadedFicha] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const { id } = useParams();

  useEffect(() => {
    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:3000/api/fichas/62893212ec14d8e74d066992`,
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
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.centro_atendimento
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Tipo de ficha"
                      label="Tipo de Ficha"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.atendimento.ficha.tipo_ficha
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Exposição"
                      label="Exposição"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.ficha.exposicao
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Data"
                      label="Data"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.ficha.data_ficha
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Hora"
                      label="Hora"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.ficha.hora_ficha
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={3}>
                      <Divider>Dados - Atendimento</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Data Atendimento"
                      label="Data Atendimento"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.data_atendimento
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Hora Atendimento"
                      label="Horario Atendimento"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento
                          .horario_atendimento
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Meio Atendimento"
                      label="Meio Atendimento"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.meio_atendimento
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Local Atendimento"
                      label="Local Atendimento"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento.local_atendimento
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Responsável Atendimento"
                      label="Responsável Atendimento"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento
                          .responsavel_atendimento
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Responsável Revisão"
                      label="Responsável Revisão"
                      variant="standard"
                      disabled
                      value={
                        loadedFicha.defaultValues.atendimento
                          .responsavel_revisao
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Responsável Supervisão"
                      label="Responsável Supervisão"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.atendimento
                          .responsavel_supervisao
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Controle Centro"
                      label="Controle Centro"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.atendimento.controle_centro
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={3}>
                      <Divider>Dados - Solicitante</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="Nome Solicitante"
                      label="Nome Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.solicitante.nome_solicitante
                      }
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      id="Categoria Solicitante"
                      label="Categoria Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.solicitante
                          .categoria_multiple_select
                      }
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="UF Solicitante"
                      label="UF Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.solicitante.uf_solicitante
                      }
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="Municipio Solicitante"
                      label="Municipio Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.solicitante
                          .municipio_solicitante
                      }
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="Fone Solicitante"
                      label="Fone Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.solicitante.fone_solicitante
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="Instituição Solicitante"
                      label="Instituição Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.solicitante
                          .instituicao_solicitante
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={3}>
                      <Divider>Dados - Paciente</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Nome Paciente"
                      label="Nome Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.defaultValues.paciente.nome_paciente}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Peso Paciente"
                      label="Peso Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.defaultValues.paciente.peso_paciente}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Data de Nascimento do"
                      label="Data de Nascimento do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente
                          .data_nascimento_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="Idade"
                      label="Idade"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.defaultValues.paciente.idade_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="sexo"
                      label="Sexo do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.defaultValues.paciente.sexo_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="Gestante"
                      label="Gestante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente
                          .gestante_select_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="Raça/Cor"
                      label="Raça/Cor"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.raca_cor_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Escolaridade"
                      label="Escolaridade do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.escolaridade_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="ocupacao"
                      label="Ocupação do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.ocupacao_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={3}>
                      <Divider></Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="pais"
                      label="País do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco
                          .pais_paciente
                      }
                    />
                  </Grid>{' '}
                  <Grid item xs={3}>
                    <TextField
                      id="municipio_paciente"
                      label="Municipio do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco
                          .municipio_paciente
                      }
                    />
                  </Grid>{' '}
                  <Grid item xs={3}>
                    <TextField
                      id="cep_paciente"
                      label="CEP do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco.cep_paciente
                      }
                    />
                  </Grid>{' '}
                  <Grid item xs={3}>
                    <TextField
                      id="bairro"
                      label="Bairro do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco
                          .bairro_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="logradouro_paciente"
                      label="Logradouro do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco
                          .logradouro_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="numero_casa_paciente"
                      label="Numero da casa do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco
                          .numero_casa_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="complemento_casa_paciente"
                      label="Complemento End. Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.endereco
                          .complemento_casa_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="bairro"
                      label="Telefone do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.telefone_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="nome_mae_paciente"
                      label="Nome da Mãe do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.nome_mae_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="prontuario_paciente"
                      label="Prontuário do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.prontuario_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider></Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="cpf_paciente"
                      label="CPF do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.defaultValues.paciente.cpf_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="rg_paciente"
                      label="RG do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.defaultValues.paciente.rg_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="cartao_sus_paciente"
                      label="Cartão SUS do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.cartao_sus_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="convenio_paciente"
                      label="Convênio do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.defaultValues.paciente.convenio_paciente
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider>Agente Tóxico</Divider>
                    </Box>
                  </Grid>
                  {/* {loadedFicha.defaultValues.acompanhamento.dados.map(
                    (item, index) => (
                      <div key={index}>
                        <p type="text"> </p>
                        <p type="text">{item.id}</p>
                        <p type="text">{item.informante}</p>
                      </div>
                    ),
                  )} */}
                </Grid>
              </Box>
            </Paper>
          )}
        </Box>{' '}
      </Container>
    </section>
  );
};

export default Visualizar;
