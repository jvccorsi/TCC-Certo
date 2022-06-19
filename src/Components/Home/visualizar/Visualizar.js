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

const Visualizar = () => {
  const [loadedFicha, setLoadedFicha] = useState();
  const { isLoading, sendRequest } = useHttpClient();
  const [emailUser, setEmailUser] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchUserById = async (valor) => {
      try {
        const responseData = await sendRequest(
          `https://api-tcc-unicamp.herokuapp.com/api/users/${valor.updateby}`,
          'GET',
        );
        setEmailUser(responseData.email);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFichas = async () => {
      try {
        const responseData = await sendRequest(
          `https://api-tcc-unicamp.herokuapp.com/api/fichas/${id}`,
          'GET',
        );
        setLoadedFicha(responseData);
        fetchUserById(responseData);
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
              <h1 className={styles.titulo_visualizar}>Atendimento - {id}</h1>
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
                      value={loadedFicha.atendimento.centro_atendimento}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Tipo de ficha"
                      label="Tipo de Ficha"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.atendimento.ficha.tipo_ficha}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Exposição"
                      label="Exposição"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.ficha.exposicao}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Data"
                      label="Data"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.ficha.data_ficha}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Hora"
                      label="Hora"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.ficha.hora_ficha}
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
                      value={loadedFicha.atendimento.data_atendimento}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Hora Atendimento"
                      label="Horario Atendimento"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.horario_atendimento}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Meio Atendimento"
                      label="Meio Atendimento"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.meio_atendimento}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Local Atendimento"
                      label="Local Atendimento"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.local_atendimento}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Responsável Atendimento"
                      label="Responsável Atendimento"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.responsavel_atendimento}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Responsável Revisão"
                      label="Responsável Revisão"
                      variant="standard"
                      disabled
                      value={loadedFicha.atendimento.responsavel_revisao}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Responsável Supervisão"
                      label="Responsável Supervisão"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.atendimento.responsavel_supervisao}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Controle Centro"
                      label="Controle Centro"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.atendimento.controle_centro}
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
                      value={loadedFicha.solicitante.nome_solicitante}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      id="Categoria Solicitante"
                      label="Categoria Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      multiline
                      value={loadedFicha.solicitante.categoria_multiple_select}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="UF Solicitante"
                      label="UF Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.solicitante.uf_solicitante}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="Municipio Solicitante"
                      label="Municipio Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.solicitante.municipio_solicitante}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="Fone Solicitante"
                      label="Fone Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.solicitante.fone_solicitante}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="Instituição Solicitante"
                      label="Instituição Solicitante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.solicitante.instituicao_solicitante}
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
                      value={loadedFicha.paciente.nome_paciente}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Peso Paciente"
                      label="Peso Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.peso_paciente}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="Data de Nascimento do"
                      label="Data de Nascimento do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.data_nascimento_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="Idade"
                      label="Idade"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.idade_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="sexo"
                      label="Sexo do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.sexo_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="Gestante"
                      label="Gestante"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.gestante_select_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="Raça/Cor"
                      label="Raça/Cor"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.raca_cor_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Escolaridade"
                      label="Escolaridade do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.escolaridade_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="ocupacao"
                      label="Ocupação do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.ocupacao_paciente}
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
                      value={loadedFicha.paciente.endereco.pais_paciente}
                    />
                  </Grid>{' '}
                  <Grid item xs={3}>
                    <TextField
                      id="municipio_paciente"
                      label="Municipio do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.endereco.municipio_paciente}
                    />
                  </Grid>{' '}
                  <Grid item xs={3}>
                    <TextField
                      id="cep_paciente"
                      label="CEP do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.endereco.cep_paciente}
                    />
                  </Grid>{' '}
                  <Grid item xs={3}>
                    <TextField
                      id="bairro"
                      label="Bairro do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.endereco.bairro_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="logradouro_paciente"
                      label="Logradouro do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.endereco.logradouro_paciente}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="numero_casa_paciente"
                      label="Numero da casa do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.endereco.numero_casa_paciente}
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
                        loadedFicha.paciente.endereco.complemento_casa_paciente
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
                      value={loadedFicha.paciente.telefone_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="nome_mae_paciente"
                      label="Nome da Mãe do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.nome_mae_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="prontuario_paciente"
                      label="Prontuário do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.prontuario_paciente}
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
                      value={loadedFicha.paciente.cpf_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="rg_paciente"
                      label="RG do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.rg_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="cartao_sus_paciente"
                      label="Cartão SUS do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.cartao_sus_paciente}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="convenio_paciente"
                      label="Convênio do Paciente"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.paciente.convenio_paciente}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider>Agente Tóxico</Divider>
                    </Box>
                  </Grid>
                  {loadedFicha.agenteToxico.dados.map((item, index) => (
                    <>
                      <Grid item xs={12}>
                        <Box mb={4} mt={3}>
                          <Divider>Agente Tóxico - {index + 1}</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={4} key={index}>
                        <TextField
                          id="Nome"
                          label="Nome"
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.nome}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          id="substanciaGenero"
                          label="Substancia Genero "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.substancia_Genero}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          id="subclasse"
                          label="Subclasse "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.subclasse}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          id="classe"
                          label="Classe "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.classe}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          id="grupo"
                          label="Grupo "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.grupo}
                        />
                      </Grid>
                    </>
                  ))}
                  <Grid item xs={12}>
                    <Box mb={4} mt={3}>
                      <Divider>Complemento - Agente Tóxico</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="dados_complementares"
                      label="Dados Complementares "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.agenteToxico.dados_complementares}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="quantidade_apresentacao"
                      label="Quantidade/Apresentação"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.agenteToxico.quantidade_apresentacao}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="dose"
                      label="Dose"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.agenteToxico.dose}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider>Exposição</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="data"
                      label="Data Exposição"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.data}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="horario"
                      label="Horario Exposição"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.horario}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="tempo_decorrido"
                      label="Tempo Decorrido"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.tempo_decorrido}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="tipo_exposicao"
                      label="Tipo Exposiçao"
                      variant="standard"
                      disabled
                      fullWidth
                      multiline
                      value={loadedFicha.exposicao.tipos.tipo_exposicao}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="tempo_decorrido"
                      label="Duração"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.duracao_exposicao}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="local_exposicao"
                      label="Local Exposição "
                      variant="standard"
                      disabled
                      multiline
                      fullWidth
                      value={loadedFicha.exposicao.tipos.local_exposicao}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="zona_exposicao"
                      label="Zona Exposição "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.tipos.zona_exposicao}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="pais"
                      label="País "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.pais}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="estado"
                      label="Estado "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.estado}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="municipio"
                      label="Municipio "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.municipio}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="cep"
                      label="Cep "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.cep}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="bairro"
                      label="Bairro "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.bairro}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="logradouro"
                      label="Logradouro "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.logradouro}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="numero"
                      label="Numero "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.numero}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="complemento"
                      label="Complemento "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.complemento}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="fone"
                      label="Fone "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.exposicao.endereco.fone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider></Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="via_de_exposicao"
                      label="Via de Exposicao "
                      variant="standard"
                      disabled
                      fullWidth
                      multiline
                      value={loadedFicha.exposicao.tipos.via_de_exposicao}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="circunstancia_de_exposicao"
                      label="Circunstancias da Exposição "
                      variant="standard"
                      disabled
                      multiline
                      fullWidth
                      value={
                        loadedFicha.exposicao.tipos.circunstancia_de_exposicao
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="local_mordida"
                      label="Local Mordida "
                      variant="standard"
                      disabled
                      multiline
                      fullWidth
                      value={loadedFicha.exposicao.tipos.local_mordida}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="especificar_mordida"
                      label="Especificar "
                      variant="standard"
                      disabled
                      multiline
                      fullWidth
                      value={loadedFicha.exposicao.especificar_mordida}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider>Resultado Exames</Divider>
                    </Box>
                  </Grid>
                  {loadedFicha.exame.dados.map((item, index) => (
                    <>
                      <Grid item xs={12}>
                        <Box mb={4} mt={3}>
                          <Divider>Exame/Resultado - {index + 1}</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={10} key={index}>
                        <TextField
                          id="Exame"
                          label="Exame"
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.nomeExame}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          id="resultadoExame"
                          label="Resultado do Exame"
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.resultadoExame}
                        />
                      </Grid>
                    </>
                  ))}
                  <Grid item xs={12}>
                    <Box mt={3} mb={4}>
                      <Divider>Outras Informações</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={4}>
                      <Divider>Gravidade</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="classificacao_gravidade"
                      label="Classificação Inicial da Gravidade "
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.classificacao_gravidade
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="manifestacao"
                      label="Manifestacao Clínica"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.manifestacoesClinicas
                          .manifestacao
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="sinais_sintomas"
                      label="Sinais e Sintomas "
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.manifestacoesClinicas
                          .sinais_sintomas
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={4}>
                      <Divider>Tratamento</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="medida_tomada"
                      label="Medida já tomada"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.tratamento.medida_tomada
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="medida_orientada"
                      label="Medida Orientada "
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.tratamento
                          .medida_orientada
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="medida_realizada"
                      label="Medida Realizada"
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.tratamento
                          .medida_realizada
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="informacoes_adicionais"
                      label="Informações Adicionais Fornecidas "
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.tratamento
                          .informacoes_adicionais
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="exames_resultados_lab"
                      label="Exames/Resultados Laboratoriais "
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.outrasInformacoes.tratamento
                          .exames_resultados_lab
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={4}>
                      <Divider>História</Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="historia"
                      label="História "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.outrasInformacoes.historia}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="fonte"
                      label="Fonte "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.outrasInformacoes.fonte}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="complemento"
                      label="Complemento "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.outrasInformacoes.complemento}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="imagens"
                      label="Imagens "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.outrasInformacoes.imagens}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="observacoes"
                      label="Observações "
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.outrasInformacoes.observacoes}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={4} mt={3}>
                      <Divider>Acompanhamento</Divider>
                    </Box>
                  </Grid>
                  {loadedFicha.acompanhamento.dados.map((item, index) => (
                    <>
                      <Grid item xs={12}>
                        <Box mb={4} mt={3}>
                          <Divider>Acompanhamento {index + 1}</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={3} key={index}>
                        <TextField
                          id="observacoes"
                          label="Data/Hora "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.data_hora}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          id="observacoes"
                          label="Responsável "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.responsavel}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          id="observacoes"
                          label="Evolucao "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.evolucao}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          id="observacoes"
                          label="Informante "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.informante}
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <TextField
                          id="observacoes"
                          label="Instituicao "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.instituicao}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="observacoes"
                          label="Cidade "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.cidade}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="observacoes"
                          label="Fone "
                          variant="standard"
                          disabled
                          fullWidth
                          value={item.fone}
                        />
                      </Grid>
                    </>
                  ))}
                  <Grid item xs={12}>
                    <Box mb={4} mt={3}>
                      <Divider>Classificação Final </Divider>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="classificacao_gravidade_final"
                      label="Classificação Gravidade Final "
                      variant="standard"
                      disabled
                      fullWidth
                      value={
                        loadedFicha.classificacaoFinal
                          .classificacao_gravidade_final
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="desfecho"
                      label="Desfecho"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.classificacaoFinal.desfecho}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="obito"
                      label="Obito"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.classificacaoFinal.obito}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="autopsia"
                      label="Autopsia"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.classificacaoFinal.autopsia}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="data"
                      label="Data"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.classificacaoFinal.data}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="resultado_autopsia"
                      label="Resultado Autopsia"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.classificacaoFinal.resultado_autopsia}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="contribuicao_obito"
                      label="Contribuição para o Óbito"
                      variant="standard"
                      disabled
                      fullWidth
                      value={loadedFicha.classificacaoFinal.contribuicao_obito}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {emailUser && (
                      <TextField
                        id="uptadeby"
                        label="Ultima vez atualizado por: "
                        variant="standard"
                        disabled
                        fullWidth
                        value={emailUser}
                      />
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Status Atendimento"
                      label="Status Atendimento"
                      variant="standard"
                      fullWidth
                      disabled
                      value={loadedFicha.atendimentoStatus}
                    />
                  </Grid>
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
