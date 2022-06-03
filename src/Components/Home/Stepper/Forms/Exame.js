import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Grid,
  TextField,
  Divider,
  IconButton,
} from '@mui/material';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Exame = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'exame.dados',
  });

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
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
                append({
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
              {fields.map((item, index) => {
                return (
                  <>
                    <li key={item.id}>
                      <Controller
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Exame{' '}
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
                        {...register(`exame.dados.${index}.nomeExame`)}
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
                        {...register(`exame.dados.${index}.resultadoExame`)}
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
        </Grid>
      </Box>
    </>
  );
};

export default Exame;
