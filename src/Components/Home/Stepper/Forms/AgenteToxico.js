import { TextField, Grid, Box, Divider } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const AgenteToxico = () => {
  const { control } = useFormContext();

  return (
    <Box m={4}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box m={3}>
            <Divider>Agente 1</Divider>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="agenteToxico.agente1.nome"
            render={({ field }) => (
              <TextField
                id="agente1.nome"
                label="Nome Popular/Comercial"
                variant="outlined"
                placeholder="Nome Popular/Comercial"
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
            name="agenteToxico.agente1.substancia_Genero"
            render={({ field }) => (
              <TextField
                id="agente1.substancia_Genero"
                label="Substância/Gênero-espécie"
                variant="outlined"
                placeholder="Substância/Gênero-espécie"
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
            name="agenteToxico.agente1.subclasse"
            render={({ field }) => (
              <TextField
                id="agente1.subclasse"
                label="Subclasse"
                variant="outlined"
                placeholder="Subclasse"
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
            name="agenteToxico.agente1.classe"
            render={({ field }) => (
              <TextField
                id="agente1.classe"
                label="Classe"
                variant="outlined"
                placeholder="Classe"
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
            name="agenteToxico.agente1.grupo"
            render={({ field }) => (
              <TextField
                id="agente1.grupo"
                label="Grupo"
                variant="outlined"
                placeholder="Grupo"
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
            <Divider>Agente 2</Divider>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="agenteToxico.agente2.nome"
            render={({ field }) => (
              <TextField
                id="agente2.nome"
                label="Nome Popular/Comercial"
                variant="outlined"
                placeholder="Nome Popular/Comercial"
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
            name="agenteToxico.agente2.substancia_Genero"
            render={({ field }) => (
              <TextField
                id="agente2.substancia_Genero"
                label="Substância/Gênero-espécie"
                variant="outlined"
                placeholder="Substância/Gênero-espécie"
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
            name="agenteToxico.agente2.subclasse"
            render={({ field }) => (
              <TextField
                id="agente2.subclasse"
                label="Subclasse"
                variant="outlined"
                placeholder="Subclasse"
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
            name="agenteToxico.agente2.classe"
            render={({ field }) => (
              <TextField
                id="agente2.classe"
                label="Classe"
                variant="outlined"
                placeholder="Classe"
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
            name="agenteToxico.agente2.grupo"
            render={({ field }) => (
              <TextField
                id="agente2.grupo"
                label="Grupo"
                variant="outlined"
                placeholder="Grupo"
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
            <Divider>Agente 3</Divider>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="agenteToxico.agente3.nome"
            render={({ field }) => (
              <TextField
                id="agente3.nome"
                label="Nome Popular/Comercial"
                variant="outlined"
                placeholder="Nome Popular/Comercial"
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
            name="agenteToxico.agente3.substancia_Genero"
            render={({ field }) => (
              <TextField
                id="agente3.substancia_Genero"
                label="Substância/Gênero-espécie"
                variant="outlined"
                placeholder="Substância/Gênero-espécie"
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
            name="agenteToxico.agente3.subclasse"
            render={({ field }) => (
              <TextField
                id="agente3.subclasse"
                label="Subclasse"
                variant="outlined"
                placeholder="Subclasse"
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
            name="agenteToxico.agente3.classe"
            render={({ field }) => (
              <TextField
                id="agente3.classe"
                label="Classe"
                variant="outlined"
                placeholder="Classe"
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
            name="agenteToxico.agente3.grupo"
            render={({ field }) => (
              <TextField
                id="agente3.grupo"
                label="Grupo"
                variant="outlined"
                placeholder="Grupo"
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
                // required
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
                // required
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
                // required
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgenteToxico;
