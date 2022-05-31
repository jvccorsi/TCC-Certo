import { TextField, Grid, Box, Divider, IconButton } from '@mui/material';

import React from 'react';
import { Controller, useFormContext, useFieldArray } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const AgenteToxico = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'agenteToxico.dados',
  });

  return (
    <Box m={4}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box m={3}>
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
            {fields.map((item, index) => {
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
                      {...register(`agenteToxico.dados.${index}.nome`)}
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
                      {...register(`agenteToxico.dados.${index}.subclasse`)}
                    />
                    <TextField
                      margin="dense"
                      id="classe"
                      label="Classe"
                      variant="outlined"
                      placeholder="Classe"
                      fullWidth
                      type="text"
                      {...register(`agenteToxico.dados.${index}.classe`)}
                    />
                    <TextField
                      margin="dense"
                      id="grupo"
                      label="Grupo"
                      variant="outlined"
                      placeholder="Grupo"
                      fullWidth
                      type="text"
                      {...register(`agenteToxico.dados.${index}.grupo`)}
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
      </Grid>
    </Box>
  );
};

export default AgenteToxico;
