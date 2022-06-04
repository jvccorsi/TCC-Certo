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
  IconButton,
} from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';
import styles from './editar.module.css';

import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useHttpClient } from '../../Hooks/http-hook';
import LoadingSpinner from '../../IUElements/LoadingSpinner';
import { AuthContext } from '../../Hooks/AuthContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

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
const desfecho = [
  'determinação de ácido fórmico_sangue',
  'determinação de ácido fórmico_urina',
  'dosagem de ácido aminolevulínico',
  'dosagem colinesterase',
  'dosagem de etilenoglicol_sangue',
  'dosagem de etilenoglicol_urina',
  'dosagem de etanol_sangue',
  'dosagem de etanol_urina',
  'identificação de anfetaminas',
  'identificação de benzodiazepínicos',
  'identificação de canabinóides',
  'identificação de cocaína',
  'identificação de levamizol',
  'identificação de opiáceos',
  'identificação de MDMA',
  'medida do pH',
  'dosagem de metanol_sangue',
  'dosagem de metanol_urina',
  'dosagem de paracetamol',
  'dosagem de paraquat_sangue',
  'dosagem de paraquat_urina',
  'dosagem de salicilatos',
  'triagem de solventes_sangue',
  'triagem de solventes_urina',
  'triagem de solventes_outros',
  'triagem de anticolinérgicos',
  'triagem de anticonvulsivantes',
  'triagem de antidepressivos',
  'triagem de antieméticos',
  'triagem de alucinógenos',
  'triagem de anfetaminas',
  'triagem de antihistaminicos',
  'triagem de analgésicos',
  'triagem de antipsicóticos',
  'triagem para arsênico',
  'triagem de benzodiazepínicos',
  'triagem de canabinóides',
  'triagem de carbamatos_sangue',
  'triagem de carbamatos_urina',
  'triagem de carbamatos_lavado',
  'triagem de cocaina',
  'triagem da colinesterase',
  'triagem de cumarínicos_sangue',
  'triagem de cumarínicos_urina',
  'triagem de drogas sintéticas_soro',
  'triagem de drogas sintéticas_urina',
  'triagem de gama-hidroxibutirato_soro',
  'triagem de gama-hidroxibutirato_urina',
  'triagem de gama-hidroxibutirato_outros',
  'triagem de hipoglicemiantes',
  'triagem de extase (MDMA)',
  'triagem de nafazolina',
  'triagem de anestésicos gerais',
  'triagem de organofosforados_sangue',
  'triagem de organofosforados_urina',
  'triagem de organofosforados_lavado',
  'triagem de opíáceos',
  'triagem de bipiridilos (paraquat)_urina',
  'triagem de bipiridilos (paraquat)_lavado',
  'triagem de bipiridilos (paraquat)_outros',
  'triagem de simpatomiméticos',
  'triagem de sedativos não benzodiazepínicos',
  'triagem relaxantes musculares',
];
const gestante = [
  '1Trim',
  '2Trim',
  '3Trim',
  'TrimDesc',
  'Nao',
  'NaoSeAplica',
  'Ignorado',
];

const sexoPaciente = ['Masculino', 'Feminino', 'Ignorado'];

const tipoExposicao = [
  'Aguda-Unica',
  'Aguda-Repetida',
  'Cronica',
  'Aguda sobre Cronica',
  'Ignorado',
];
const localExposicao = [
  'Residencia-Habitual',
  'Residencia-Outra',
  'Local de Trabalho',
  'AmbienteExterno/Publico',
  'Escola/Creche',
  'Servico de saude',
  'Ignorado',
  'Outro',
];

const zonaExposicao = ['Urbana', 'Rural', 'Ignorado'];

const viaExposicao = [
  'Cutanea',
  'Ignorada',
  'Mordida/Picada/Contato',
  'Nao se aplica',
  'Nasal',
  'Ocular',
  'Oral',
  'Otologica',
  'Outra',
  'Parental',
  'Parental Intradermica',
  'Parental Intramuscular',
  'Parental Intravenosa',
  'Parental Subcutanea',
  'Respiratoria/Inalatoria',
  'Retal',
  'Sublingual',
  'Transplacentaria',
  'Vaginal',
];

const CircunstanciaExposicao = [
  'Abstinencia',
  'Abuso',
  'Acidental',
  'Aleitamento Materno',
  'Ambiental',
  'Automedicacao - Indicacao de pessoa nao autorizada',
  'Automedicacao - Iniciativa do proprio paciente/cuidador',
  'Erro de Medicacao - Prescricao Medica Inadequada',
  'Erro de Medicacao - Dispensacao',
  'Erro de Medicacao - Dose',
  'Erro de Medicacao - Outra',
  'Erro de Medicacao - Preparacao',
  'Erro de Medicacao - Rotulagem',
  'Erro de Medicacao - Troca de embalagem',
  'Erro de Medicacao - Troca de nomes',
  'Erro de Medicacao - Via',
  'Ignorada',
  'Ingestao Alimentar',
  'Interacao Medicamentosa',
  'Nao se aplica',
  'Ocupacional',
  'Outra',
  'Reacao Adversa - Alimento',
  'Reacao Adversa - Cosmetico',
  'Reacao Adversa - Medicamento',
  'Tentativa de Abortamento',
  'Tentativa de Suicidio',
  'Uso indevido',
  'Uso Terapeutico',
  'Violencia/Maus tratos/Homicidio',
];

const localMordida = ['Hemicorpo Esquerdo', 'Hemicorpo direito'];

const FCWidth = {
  width: '20rem',
};
const FCWidthMenor = {
  width: '10rem',
};

const classificacaoGravidade = ['Nula', 'Leve', 'Moderada', 'Grave', 'Fatal'];
const desfechoFinal = [
  'Assintomatico',
  'Cura',
  'Sequela',
  'Diagnostico Diferencial',
  'Ignorado',
];
const obito = ['Relacionado ao evento', 'Outra causa'];

const autopsia = ['Sim', 'Nao'];

const contribuicaoObito = [
  'Com certeza Responsavel',
  'Provavelmente Responsavel',
  'Contribuiu para o Obito ',
  'Provavelmente Nao Responsavel',
  'Com Certeza Nao Responsavel',
  'Ignorado',
];

const Editar = () => {
  const { id } = useParams();
  const [loadedFicha, setLoadedFicha] = useState();
  const [emailUser, setEmailUser] = useState();
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
  const {
    fields: AgenteToxicoFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'agenteToxico.dados',
  });

  const {
    fields: ExameFields,
    append: ExameAppendFields,
    remove: ExameRemoveFields,
  } = useFieldArray({
    control,
    name: 'exame.dados',
  });
  const {
    fields: AcompanhamentoFields,
    append: AcompanhamentoAppend,
    remove: AcompanhamentoRemove,
  } = useFieldArray({
    control,
    name: 'acompanhamento.dados',
  });

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

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const responseData = await sendRequest(
          `https://api-tcc-unicamp.herokuapp.com/api/users/${auth.userId}`,
          'GET',
        );
        setEmailUser(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserById();
  }, [sendRequest, auth.userId]);

  const submitFormRequest = async (data) => {
    var data_post = data;
    data_post.updateby = auth.userId;
    console.log(data_post);
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
                <h1 className={styles.titulo_visualizar}>
                  Editar - Ficha: {id}
                </h1>
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
                        {emailUser && (
                          <Typography variant="h6" component="h6">
                            Email do editor atual:{' '}
                            <b style={{ color: '#0072FF' }}>
                              {emailUser.email}{' '}
                            </b>
                          </Typography>
                        )}
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
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="atendimento.centro_atendimento"
                          render={({ field }) => (
                            <TextField
                              id="centro_atendimento"
                              label="Centro Atendimento"
                              variant="outlined"
                              placeholder="Centro atendimento"
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider></Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="atendimento.ficha.tipo_ficha"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="tipoFicha">
                                Tipo de ficha
                              </InputLabel>
                              <Select
                                defaultValue=""
                                {...field}
                                labelId=" Tipo de ficha"
                                label=" Tipo de ficha"
                              >
                                <MenuItem value="Humana">Humana</MenuItem>
                                <MenuItem value="Animal">Animal</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="atendimento.ficha.exposicao"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="Exposicao">Exposicao</InputLabel>
                              <Select
                                {...field}
                                labelId="Exposicao"
                                label="Exposicao"
                                defaultValue=""
                              >
                                <MenuItem value="Individual">
                                  Individual
                                </MenuItem>
                                <MenuItem value="Coletiva">Coletiva</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.ficha.data_ficha"
                          render={({ field }) => (
                            <TextField
                              id="data_ficha"
                              variant="outlined"
                              placeholder="Data da Ficha"
                              fullWidth
                              {...field}
                              type="date"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.ficha.hora_ficha"
                          render={({ field }) => (
                            <TextField
                              id="hora_ficha"
                              variant="outlined"
                              fullWidth
                              {...field}
                              type="time"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider>Atendimento</Divider>
                        </Box>
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
                              fullWidth
                              {...field}
                              type="date"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="atendimento.horario_atendimento"
                          render={({ field }) => (
                            <TextField
                              id="horario_atendimento"
                              variant="outlined"
                              fullWidth
                              {...field}
                              type="time"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="meioAtendimento">
                                Meio de atendimento{' '}
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="meioAtendimento"
                                defaultValue=""
                              >
                                <MenuItem value="Telefonico">
                                  Telefonico
                                </MenuItem>
                                <MenuItem value="Presencial">
                                  Presencial
                                </MenuItem>
                                <MenuItem value="Outro">Outro</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                          name="atendimento.meio_atendimento"
                          control={control}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.local_atendimento"
                          render={({ field }) => (
                            <TextField
                              id="local_atendimento"
                              label="Local do atendimento"
                              variant="outlined"
                              placeholder="Local do atendimento"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.responsavel_atendimento"
                          render={({ field }) => (
                            <TextField
                              id="responsavel_atendimento"
                              label="Responsável pelo atendimento"
                              variant="outlined"
                              placeholder="Responsável pelo atendimento"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.responsavel_revisao"
                          render={({ field }) => (
                            <TextField
                              id="responsavel_revisao"
                              label="Responsável pela revisão"
                              variant="outlined"
                              placeholder="Responsável pela revisão"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>{' '}
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="atendimento.responsavel_supervisao"
                          render={({ field }) => (
                            <TextField
                              id="responsavel_supervisao"
                              label="Responsável pela supervisão"
                              variant="outlined"
                              placeholder="Responsável pela supervisão"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="atendimento.controle_centro"
                          render={({ field }) => (
                            <TextField
                              id="controle_centro"
                              label="Controle Centro"
                              variant="outlined"
                              placeholder="Controle Centro"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider>Solicitante</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="solicitante.nome_solicitante"
                          render={({ field }) => (
                            <TextField
                              id="nome_solicitante"
                              label="Nome do Solicitante"
                              variant="outlined"
                              placeholder="Nome do Solicitante"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
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
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="solicitante.uf_solicitante"
                          render={({ field }) => (
                            <TextField
                              id="uf_solicitante"
                              label="UF"
                              variant="outlined"
                              placeholder="UF"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="solicitante.municipio_solicitante"
                          render={({ field }) => (
                            <TextField
                              id="municipio_solicitante"
                              label="Município do Solicitante"
                              variant="outlined"
                              placeholder="Município do Solicitante"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="solicitante.fone_solicitante"
                          render={({ field }) => (
                            <TextField
                              id="fone_solicitante"
                              label="Fone:"
                              variant="outlined"
                              placeholder="Fone"
                              fullWidth
                              {...field}
                              type="tel"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="solicitante.instituicao_solicitante"
                          render={({ field }) => (
                            <TextField
                              id="instituicao_solicitante"
                              label="Instituicao"
                              variant="outlined"
                              placeholder="Instituicao"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box m={3}>
                          <Divider>Paciente</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="paciente.nome_paciente"
                          render={({ field }) => (
                            <TextField
                              id="nome_paciente"
                              label="Nome do Paciente"
                              variant="outlined"
                              placeholder="Nome do Paciente"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.data_nascimento_paciente"
                          render={({ field }) => (
                            <TextField
                              label="Data Nasc (dd/mm/dddd)"
                              id="data_nascimento"
                              variant="outlined"
                              placeholder="Data Nasc (dd/mm/dddd)"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.peso_paciente"
                          render={({ field }) => (
                            <TextField
                              label="Peso - KG"
                              id="data_nascimento"
                              variant="outlined"
                              placeholder="Peso - KG"
                              fullWidth
                              {...field}
                              type="number"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.idade_paciente"
                          render={({ field }) => (
                            <TextField
                              id="idade_paciente"
                              label="Idade (D,M,A)"
                              variant="outlined"
                              placeholder="Idade (D,M,A)"
                              fullWidth
                              {...field}
                              type="number"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="sexopaciente">Sexo </InputLabel>
                              <Select
                                {...field}
                                labelId="sexopaciente"
                                defaultValue=""
                              >
                                {sexoPaciente.map((sexoPaciente) => (
                                  <MenuItem
                                    value={sexoPaciente}
                                    key={sexoPaciente}
                                  >
                                    {sexoPaciente}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                          name="paciente.sexo_paciente"
                          control={control}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="gestante_select">
                                Gestante{' '}
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="gestante_select"
                                defaultValue=""
                              >
                                {gestante.map((gestante) => (
                                  <MenuItem value={gestante} key={gestante}>
                                    {gestante}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                          name="paciente.gestante_select_paciente"
                          control={control}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.raca_cor_paciente"
                          render={({ field }) => (
                            <TextField
                              id="raca_cor_paciente"
                              label="Raça/Cor"
                              variant="outlined"
                              placeholder="Raça/Cor"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.escolaridade_paciente"
                          render={({ field }) => (
                            <TextField
                              id="escolaridade_paciente"
                              label="Escolaridade"
                              variant="outlined"
                              placeholder="Escolaridade"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.ocupacao_paciente"
                          render={({ field }) => (
                            <TextField
                              id="ocupacao"
                              label="Ocupacao"
                              variant="outlined"
                              placeholder="Ocupacao"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box m={3}>
                          <Divider></Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="paciente.endereco.pais_paciente"
                          render={({ field }) => (
                            <TextField
                              id="pais_paciente"
                              label="País"
                              variant="outlined"
                              placeholder="País"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="paciente.endereco.municipio_paciente"
                          render={({ field }) => (
                            <TextField
                              id="municipio_paciente"
                              label="Município"
                              variant="outlined"
                              placeholder="Município"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="paciente.endereco.cep_paciente"
                          render={({ field }) => (
                            <TextField
                              id="cep_paciente"
                              label="CEP"
                              variant="outlined"
                              placeholder="Cep"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="paciente.endereco.bairro_paciente"
                          render={({ field }) => (
                            <TextField
                              id="bairro_paciente"
                              label="Bairro"
                              variant="outlined"
                              placeholder="Bairro"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.endereco.logradouro_paciente"
                          render={({ field }) => (
                            <TextField
                              id="logradouro_paciente"
                              label="Logradouro"
                              variant="outlined"
                              placeholder="Logradouro"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Controller
                          control={control}
                          name="paciente.endereco.numero_casa_paciente"
                          render={({ field }) => (
                            <TextField
                              id="numero_casa_paciente"
                              label="Nº"
                              variant="outlined"
                              placeholder="Nº"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.endereco.complemento_casa_paciente"
                          render={({ field }) => (
                            <TextField
                              id="complemento_casa_paciente"
                              label="Complemento"
                              variant="outlined"
                              placeholder="Complemento"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.telefone_paciente"
                          render={({ field }) => (
                            <TextField
                              id="telefone_paciente"
                              label="Telefone"
                              variant="outlined"
                              placeholder="(dd) xxxx-xxxx"
                              fullWidth
                              {...field}
                              type="tel"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.nome_mae_paciente"
                          render={({ field }) => (
                            <TextField
                              id="nome_mae_paciente"
                              label="Nome da mãe"
                              variant="outlined"
                              placeholder="Nome da mãe"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="paciente.prontuario_paciente"
                          render={({ field }) => (
                            <TextField
                              id="prontuario_paciente"
                              label="Prontuário"
                              variant="outlined"
                              placeholder="Prontuário"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box m={3}>
                          <Divider></Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.cpf_paciente"
                          render={({ field }) => (
                            <TextField
                              id="cpf_paciente"
                              label="CPF"
                              variant="outlined"
                              placeholder="CPF"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.rg_paciente"
                          render={({ field }) => (
                            <TextField
                              id="rg_paciente"
                              label="RG"
                              variant="outlined"
                              placeholder="RG"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.cartao_sus_paciente"
                          render={({ field }) => (
                            <TextField
                              id="cartao_sus_paciente"
                              label="Cartão SUS"
                              variant="outlined"
                              placeholder="Cartão SUS"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="paciente.convenio_paciente"
                          render={({ field }) => (
                            <TextField
                              id="convenio_paciente"
                              label="Convênio"
                              variant="outlined"
                              placeholder="Convênio"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider>Agente Tóxico</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={3}>
                        <IconButton
                          variant="contained"
                          color="success"
                          onClick={() => {
                            append({
                              nome: '',
                              substancia_Genero: '',
                              subclasse: '',
                              classe: '',
                              grupo: '',
                            });
                          }}
                        >
                          <AddCircleIcon /> Adicionar
                        </IconButton>
                      </Grid>
                      <Grid item xs={9}>
                        <ul>
                          {AgenteToxicoFields.map((item, index) => {
                            return (
                              <>
                                <li key={item.id}>
                                  <TextField
                                    margin="dense"
                                    id="nome"
                                    label="Nome Agente"
                                    variant="outlined"
                                    placeholder="Nome Agente"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `agenteToxico.dados.${index}.nome`,
                                    )}
                                  />

                                  <TextField
                                    margin="dense"
                                    id="substanciaGenero"
                                    label="Substancia Genero"
                                    variant="outlined"
                                    placeholder="Substancia Genero"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `agenteToxico.dados.${index}.substancia_Genero`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="subclasse"
                                    label="Subclasse"
                                    variant="outlined"
                                    placeholder="Subclasse"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `agenteToxico.dados.${index}.subclasse`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="classe"
                                    label="Classe"
                                    variant="outlined"
                                    placeholder="Classe"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `agenteToxico.dados.${index}.classe`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="grupo"
                                    label="Grupo"
                                    variant="outlined"
                                    placeholder="Grupo"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `agenteToxico.dados.${index}.grupo`,
                                    )}
                                  />
                                  <Grid item xs={6}>
                                    <IconButton
                                      aria-label="delete"
                                      onClick={() => remove(index)}
                                      color="error"
                                    >
                                      <DeleteIcon />
                                      Deletar ⇧
                                    </IconButton>
                                  </Grid>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </Grid>
                      <Grid item xs={12}>
                        <Box m={3}>
                          <Divider></Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="agenteToxico.dados_complementares"
                          render={({ field }) => (
                            <TextField
                              id="dados_complementares"
                              label="Dados Complementares"
                              variant="outlined"
                              placeholder="Dados Complementares"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Controller
                          control={control}
                          name="agenteToxico.quantidade_apresentacao"
                          render={({ field }) => (
                            <TextField
                              id="quantidade_apresentacao"
                              label="Quantidade/Apresentacao"
                              variant="outlined"
                              placeholder="Quantidade/Apresentacao"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="agenteToxico.dose"
                          render={({ field }) => (
                            <TextField
                              id="agenteToxicodose"
                              label="Dose"
                              variant="outlined"
                              placeholder="Dose"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box m={3}>
                          <Divider>Exposição</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider></Divider>
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.data"
                          render={({ field }) => (
                            <TextField
                              id="data_exposicao"
                              variant="outlined"
                              fullWidth
                              {...field}
                              type="date"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.horario"
                          render={({ field }) => (
                            <TextField
                              id="hora_exposicao"
                              variant="outlined"
                              fullWidth
                              {...field}
                              type="time"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="exposicao.tempo_decorrido"
                          render={({ field }) => (
                            <TextField
                              id="tempo_decorrido"
                              label="Tempo decorrido (00h00min)"
                              variant="outlined"
                              placeholder="Tempo decorrido (00h00min)"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          name="exposicao.tipos.tipo_exposicao"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidthMenor}>
                              <InputLabel id="tipo_exposicao">Tipo</InputLabel>
                              <Select {...field} multiple defaultValue={[]}>
                                {tipoExposicao.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.duracao_exposicao"
                          render={({ field }) => (
                            <TextField
                              id="duracao"
                              label="Duração"
                              variant="outlined"
                              placeholder="Duração"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="exposicao.tipos.local_exposicao"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="circunstancia_select">
                                Local da exposicao
                              </InputLabel>
                              <Select {...field} multiple defaultValue={[]}>
                                {localExposicao.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider></Divider>
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          name="exposicao.tipos.zona_exposicao"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidthMenor}>
                              <InputLabel id="zona_exposicao">
                                Zona Exposicao
                              </InputLabel>
                              <Select {...field} multiple defaultValue={[]}>
                                {zonaExposicao.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.pais"
                          render={({ field }) => (
                            <TextField
                              id="endereco_pais"
                              label="País"
                              variant="outlined"
                              placeholder="País"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.estado"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="Estado"
                              variant="outlined"
                              placeholder="Estado"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.municipio"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="Municipio"
                              variant="outlined"
                              placeholder="Municipio"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.cep"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="CEP"
                              variant="outlined"
                              placeholder="CEP"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.bairro"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="Bairro"
                              variant="outlined"
                              placeholder="Bairro"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.logradouro"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="Logradouro"
                              variant="outlined"
                              placeholder="Logradouro"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.numero"
                          render={({ field }) => (
                            <TextField
                              id="numeroExposicao"
                              label="Numero"
                              variant="outlined"
                              placeholder="Numero"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.complemento"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="Complemento"
                              variant="outlined"
                              placeholder="Complemento"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controller
                          control={control}
                          name="exposicao.endereco.fone"
                          render={({ field }) => (
                            <TextField
                              id="estado"
                              label="Fone"
                              variant="outlined"
                              placeholder="Fone"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider></Divider>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="exposicao.tipos.via_de_exposicao"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="via_de_exposicao">
                                Via da Exposicao
                              </InputLabel>
                              <Select {...field} multiple defaultValue={[]}>
                                {viaExposicao.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="exposicao.tipos.circunstancia_de_exposicao"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="circunstancia_select">
                                Circunstancia da Exposicao
                              </InputLabel>
                              <Select {...field} multiple defaultValue={[]}>
                                {CircunstanciaExposicao.map(
                                  (CircunstanciaExposicao) => (
                                    <MenuItem
                                      value={CircunstanciaExposicao}
                                      key={CircunstanciaExposicao}
                                    >
                                      {CircunstanciaExposicao}
                                    </MenuItem>
                                  ),
                                )}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider></Divider>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="exposicao.tipos.local_mordida"
                          control={control}
                          type="text"
                          defaultValue={[]}
                          render={({ field }) => (
                            <FormControl sx={FCWidth}>
                              <InputLabel id="local_mordida">
                                Local da Mordida/Picada/Contato
                              </InputLabel>
                              <Select {...field} multiple defaultValue={[]}>
                                {localMordida.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
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
                          name="exposicao.especificar_mordida"
                          render={({ field }) => (
                            <TextField
                              id="Especificar"
                              label="Especificar"
                              variant="outlined"
                              placeholder="Especificar"
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider></Divider>
                      </Grid>
                      <Grid item xs={12}>
                        <Box m={3}>
                          <Divider>Exame</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={3}>
                        <IconButton
                          variant="contained"
                          color="success"
                          onClick={() => {
                            ExameAppendFields({
                              nomeExame: '',
                              resultadoExame: '',
                            });
                          }}
                        >
                          <AddCircleIcon /> Adicionar
                        </IconButton>
                      </Grid>
                      <Grid item xs={9}>
                        <ul>
                          {ExameFields.map((item, index) => {
                            return (
                              <>
                                <li key={item.id}>
                                  <Controller
                                    defaultValue=""
                                    render={({ field }) => (
                                      <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                          Exame{' '}
                                        </InputLabel>
                                        <Select {...field} defaultValue="">
                                          {desfecho.map((res) => (
                                            <MenuItem value={res} key={res}>
                                              {res}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
                                    )}
                                    {...register(
                                      `exame.dados.${index}.nomeExame`,
                                    )}
                                    control={control}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="resultado"
                                    label="Resultado"
                                    variant="outlined"
                                    placeholder="Resultado"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `exame.dados.${index}.resultadoExame`,
                                    )}
                                  />
                                  <Grid item xs={6}>
                                    <IconButton
                                      aria-label="delete"
                                      onClick={() => ExameRemoveFields(index)}
                                      color="error"
                                    >
                                      <DeleteIcon />
                                      Deletar ⇧
                                    </IconButton>
                                  </Grid>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider>Outras Informações</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={1} mb={3}>
                          <Divider>Gravidade</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Classificação Inicial da Gravidade{' '}
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="demo-simple-select-label"
                                defaultValue=""
                              >
                                <MenuItem value={'Individual'}>
                                  Individual
                                </MenuItem>
                                <MenuItem value={'Leve'}>Leve</MenuItem>
                                <MenuItem value={'Moderada'}>Moderada</MenuItem>
                                <MenuItem value={'Grave'}>Grave</MenuItem>
                                <MenuItem value={'Fatal'}>Fatal</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                          name="outrasInformacoes.classificacao_gravidade"
                          control={control}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="manifestacoes_clinicas">
                                Manifestações Clínicas
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="manifestacoes_clinicas"
                                defaultValue=""
                              >
                                <MenuItem value={'Sim'}>Sim</MenuItem>
                                <MenuItem value={'Nao'}>Nao</MenuItem>
                                <MenuItem value={'Ignorado'}>Ignorado</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                          name="outrasInformacoes.manifestacoesClinicas.manifestacao"
                          control={control}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.manifestacoesClinicas.sinais_sintomas"
                          render={({ field }) => (
                            <TextField
                              id="sinais_sintomas"
                              label="Especificar sinais e sintomas"
                              variant="outlined"
                              placeholder="Especificar sinais e sintomas"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3} mb={3}>
                          <Divider>Tratamento</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.tratamento.medida_tomada"
                          render={({ field }) => (
                            <TextField
                              id="medida_tomada"
                              label="Medida já tomada"
                              variant="outlined"
                              placeholder="Medida já tomada"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.tratamento.medida_orientada"
                          render={({ field }) => (
                            <TextField
                              id="medida_orientada"
                              label="Medida orientada"
                              variant="outlined"
                              placeholder="Medida orientada"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.tratamento.medida_realizada"
                          render={({ field }) => (
                            <TextField
                              id="medida_realizada"
                              label="Medida realizada"
                              variant="outlined"
                              placeholder="Medida realizada"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.tratamento.informacoes_adicionais"
                          render={({ field }) => (
                            <TextField
                              id="informacoes_adicionais"
                              label="Informacoes adicionais fornecidas"
                              variant="outlined"
                              placeholder="Informacoes adicionais fornecidas"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.tratamento.exames_resultados_lab"
                          render={({ field }) => (
                            <TextField
                              id="exames_resultados_lab"
                              label="Exames/Resultados Laboratoriais"
                              variant="outlined"
                              placeholder="Exames/Resultados Laboratoriais"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3} mb={3}>
                          <Divider>História</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.historia"
                          render={({ field }) => (
                            <TextField
                              id="historia"
                              label="História"
                              variant="outlined"
                              placeholder="História"
                              multiline
                              rows={3}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.fonte"
                          render={({ field }) => (
                            <TextField
                              id="fonte"
                              label="Fonte"
                              variant="outlined"
                              placeholder="Fonte"
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.complemento"
                          render={({ field }) => (
                            <TextField
                              id="complemento"
                              label="Complemento"
                              variant="outlined"
                              placeholder="Complemento"
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Controller
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="demo-simple-select-label">
                                Imagens{' '}
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="demo-simple-select-label"
                                defaultValue=""
                              >
                                <MenuItem value="Sim">Sim</MenuItem>
                                <MenuItem value="Nao">Nao</MenuItem>
                                <MenuItem value="Ignorado">Ignorado</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                          name="outrasInformacoes.imagens"
                          control={control}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          control={control}
                          name="outrasInformacoes.observacoes"
                          render={({ field }) => (
                            <TextField
                              id="observacoes"
                              label="Observacoes"
                              variant="outlined"
                              placeholder="Observacoes"
                              multiline
                              rows={2}
                              type="text"
                              fullWidth
                              {...field}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3} mb={3}>
                          <Divider>Acompanhamento</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={3}>
                        <IconButton
                          variant="contained"
                          color="success"
                          onClick={() => {
                            AcompanhamentoAppend({
                              data_hora: '',
                              responsavel: '',
                              evolucao: '',
                              informante: '',
                              instituicao: '',
                              cidade: '',
                              fone: '',
                            });
                          }}
                        >
                          <AddCircleIcon /> Adicionar
                        </IconButton>
                      </Grid>
                      <Grid item xs={9}>
                        <ul>
                          {AcompanhamentoFields.map((item, index) => {
                            return (
                              <>
                                <li key={item.id}>
                                  <TextField
                                    margin="dense"
                                    id="data_hora"
                                    label="Data/Hora"
                                    variant="outlined"
                                    placeholder="Data/Hora"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.data_hora`,
                                    )}
                                  />

                                  <TextField
                                    margin="dense"
                                    id="responsavel"
                                    label="Responsavel"
                                    variant="outlined"
                                    placeholder="Responsavel"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.responsavel`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="evolucao"
                                    label="Evolucao"
                                    variant="outlined"
                                    placeholder="Evolucao"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.evolucao`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="informante"
                                    label="Informante"
                                    variant="outlined"
                                    placeholder="Informante"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.informante`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="instituicao"
                                    label="Instituicao"
                                    variant="outlined"
                                    placeholder="Instituicao"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.instituicao`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="cidade"
                                    label="Cidade"
                                    variant="outlined"
                                    placeholder="Cidade"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.cidade`,
                                    )}
                                  />
                                  <TextField
                                    margin="dense"
                                    id="fone"
                                    label="Fone"
                                    variant="outlined"
                                    placeholder="Fone"
                                    fullWidth
                                    type="text"
                                    {...register(
                                      `acompanhamento.dados.${index}.fone`,
                                    )}
                                  />
                                  <Grid item xs={6}>
                                    <IconButton
                                      aria-label="delete"
                                      onClick={() =>
                                        AcompanhamentoRemove(index)
                                      }
                                      color="error"
                                    >
                                      <DeleteIcon />
                                      Deletar ⇧
                                    </IconButton>
                                  </Grid>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={3}>
                          <Divider>Classificação Final</Divider>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="classificacaoFinal.classificacao_gravidade_final"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="classificacao_gravidade">
                                Classificacao da Gravidade Final{' '}
                              </InputLabel>

                              <Select {...field} defaultValue="">
                                {classificacaoGravidade.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="classificacaoFinal.desfecho"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="Desfecho">Desfecho</InputLabel>

                              <Select {...field} defaultValue="">
                                {desfechoFinal.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="classificacaoFinal.obito"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="obito">Obito</InputLabel>

                              <Select {...field} defaultValue="">
                                {obito.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          name="classificacaoFinal.autopsia"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="autopsia">Autopsia</InputLabel>

                              <Select {...field} defaultValue="">
                                {autopsia.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
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
                          name="classificacaoFinal.data"
                          render={({ field }) => (
                            <TextField
                              id="data_classificacao"
                              variant="outlined"
                              fullWidth
                              {...field}
                              type="date"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controller
                          control={control}
                          name="classificacaoFinal.resultado_autopsia"
                          render={({ field }) => (
                            <TextField
                              id="resultado_autopsia"
                              label="Resultado Autópsia "
                              variant="outlined"
                              placeholder="Resultado Autópsia "
                              fullWidth
                              {...field}
                              type="text"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="classificacaoFinal.contribuicao_obito"
                          control={control}
                          type="text"
                          defaultValue=""
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel id="contribuicao_obito">
                                Contribuição para o Óbito
                              </InputLabel>

                              <Select {...field} defaultValue="">
                                {contribuicaoObito.map((res) => (
                                  <MenuItem value={res} key={res}>
                                    {res}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
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
