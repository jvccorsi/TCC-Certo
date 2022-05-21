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

const OutrasInformacoes = ({ desabiliar }) => {
  const { control } = useFormContext();

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mt={1} mb={3}>
              <Divider>Gravidade</Divider>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Controller
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Classificação Inicial da Gravidade{' '}
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    disabled={desabiliar ? 'disabled' : ''}
                  >
                    <MenuItem value={'Individual'}>Individual</MenuItem>
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
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="manifestacoes_clinicas">
                    Manifestações Clínicas
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="manifestacoes_clinicas"
                    disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Imagens{' '}
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    disabled={desabiliar ? 'disabled' : ''}
                  >
                    <MenuItem value={'Sim'}>Sim</MenuItem>
                    <MenuItem value={'Nao'}>Nao</MenuItem>
                    <MenuItem value={'Ignorado'}>Ignorado</MenuItem>
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
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OutrasInformacoes;
