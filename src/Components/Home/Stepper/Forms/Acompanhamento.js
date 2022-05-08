import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

import { IconButton, Box, Grid, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Acompanhamento = () => {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'acompanhamento.dados',
  });

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
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
                append({
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
              {fields.map((item, index) => {
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
                        {...register(`acompanhamento.dados.${index}.data_hora`)}
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
                        {...register(`acompanhamento.dados.${index}.evolucao`)}
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
                        {...register(`acompanhamento.dados.${index}.cidade`)}
                      />
                      <TextField
                        margin="dense"
                        id="fone"
                        label="Fone"
                        variant="outlined"
                        placeholder="Fone"
                        fullWidth
                        type="text"
                        {...register(`acompanhamento.dados.${index}.fone`)}
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

export default Acompanhamento;
