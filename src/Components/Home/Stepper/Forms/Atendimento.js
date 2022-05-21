import React from 'react';
import { Box, TextField } from '@mui/material';

import { Controller, useFormContext } from 'react-hook-form';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';

const Atendimento = ({ desabiliar }) => {
  const { control } = useFormContext();
  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="atendimento.centro_atendimento"
              render={({ field }) => (
                <TextField
                  id="centro_atendimento"
                  label="Centro Atendimento"
                  variant="outlined"
                  placeholder="Centro atendimento"
                  fullWidth
                  {...field}
                  type="text"
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={3}>
              <Divider>Iniciar ficha</Divider>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Tipo de ficha{' '}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      disabled={desabiliar ? 'disabled' : ''}
                    >
                      <MenuItem value={'Humana'}>Humana</MenuItem>
                      <MenuItem value={'Animal'}>Animal</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="atendimento.ficha.tipo_ficha"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Exposição{' '}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      disabled={desabiliar ? 'disabled' : ''}
                    >
                      <MenuItem value={'Individual'}>Individual</MenuItem>
                      <MenuItem value={'Coletiva'}>Coletiva</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="atendimento.ficha.exposicao"
                control={control}
              />
            </Box>
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
                  margin="normal"
                  {...field}
                  type="date"
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Box mt={2}>
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
                    disabled={desabiliar ? 'disabled' : ''}
                  />
                )}
              />
            </Box>
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
                  margin="normal"
                  {...field}
                  type="date"
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Box mt={2}>
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
                    disabled={desabiliar ? 'disabled' : ''}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box mt={2}>
              <Controller
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Meio de atendimento{' '}
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      disabled={desabiliar ? 'disabled' : ''}
                    >
                      <MenuItem value={'Telefonico'}>Telefonico</MenuItem>
                      <MenuItem value={'Presencial'}>Presencial</MenuItem>
                      <MenuItem value={'Outro'}>Outro</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="atendimento.meio_atendimento"
                control={control}
              />
            </Box>
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          {/* MULTIPLE SELECT  */}
        </Grid>
      </Box>
    </>
  );
};

export default Atendimento;
