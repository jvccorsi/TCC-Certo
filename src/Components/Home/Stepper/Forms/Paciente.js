import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Grid,
  TextField,
  Divider,
} from '@mui/material';
const Paciente = () => {
  const { control } = useFormContext();

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

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box m={3}>
              <Divider></Divider>
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
                  // required
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

                  //required
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

                  //required
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

                  //required
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="sexopaciente">Sexo </InputLabel>
                  <Select {...field} labelId="sexopaciente">
                    {sexoPaciente.map((sexoPaciente) => (
                      <MenuItem value={sexoPaciente} key={sexoPaciente}>
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
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="gestante_select">Gestante </InputLabel>
                  <Select {...field} labelId="gestante_select">
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Paciente;
