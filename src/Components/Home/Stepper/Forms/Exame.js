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
                            <Select {...field} defaultValue="">
                              {desfecho.map((res) => (
                                <MenuItem value={res} key={res}>
                                  {res}
                                </MenuItem>
                              ))}
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
