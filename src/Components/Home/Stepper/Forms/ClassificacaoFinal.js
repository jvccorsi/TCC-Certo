import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Grid,
  TextField,
} from '@mui/material';

const classificacaoGravidade = ['Nula', 'Leve', 'Moderada', 'Grave', 'Fatal'];
const desfecho = [
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

const ClassificacaoFinal = ({ desabiliar }) => {
  const { control } = useFormContext();

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controller
              name="classificacaoFinal.classificacao_gravidade_final"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="classificacao_gravidade">
                    Classificacao da Gravidade Final{' '}
                  </InputLabel>

                  <Select {...field}>
                    {classificacaoGravidade.map((res) => (
                      <MenuItem
                        value={res}
                        key={res}
                        disabled={desabiliar ? 'disabled' : ''}
                      >
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
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="Desfecho">Desfecho</InputLabel>

                  <Select {...field}>
                    {desfecho.map((res) => (
                      <MenuItem
                        value={res}
                        key={res}
                        disabled={desabiliar ? 'disabled' : ''}
                      >
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
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="obito">Obito</InputLabel>

                  <Select {...field}>
                    {obito.map((res) => (
                      <MenuItem
                        value={res}
                        key={res}
                        disabled={desabiliar ? 'disabled' : ''}
                      >
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
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="autopsia">Autopsia</InputLabel>

                  <Select {...field}>
                    {autopsia.map((res) => (
                      <MenuItem
                        value={res}
                        key={res}
                        disabled={desabiliar ? 'disabled' : ''}
                      >
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="classificacaoFinal.contribuicao_obito"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="contribuicao_obito">
                    Contribuição para o Óbito
                  </InputLabel>

                  <Select {...field}>
                    {contribuicaoObito.map((res) => (
                      <MenuItem
                        value={res}
                        key={res}
                        disabled={desabiliar ? 'disabled' : ''}
                      >
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
    </>
  );
};

export default ClassificacaoFinal;
