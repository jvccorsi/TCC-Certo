import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Grid,
  TextField,
} from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const Solicitante = ({ desabiliar }) => {
  const { control } = useFormContext();

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

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
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
                  disabled={desabiliar ? 'disabled' : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="solicitante.categoria_multiple_select"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidth}>
                  <InputLabel id="categoria_multiple_select">
                    Categoria
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="age"
                    label="age"
                    multiple
                    defaultValue={[]}
                  >
                    {categoria.map((categoria) => (
                      <MenuItem
                        value={categoria}
                        key={categoria}
                        disabled={desabiliar ? 'disabled' : ''}
                      >
                        {categoria}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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
                  disabled={desabiliar ? 'disabled' : ''}
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

export default Solicitante;
