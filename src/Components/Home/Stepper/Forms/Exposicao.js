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
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const Exposicao = () => {
  const tipoExposicao = [
    'Aguda-Unica',
    'Aguda-Repetida',
    'Cronica',
    'Aguda sobre Cronica',
    'Ignorado',
  ];
  const localExposicao = [
    'Residencia-Habitual',
    'Residencia-Outra',
    'Local de Trabalho',
    'AmbienteExterno/Publico',
    'Escola/Creche',
    'Servico de saude',
    'Ignorado',
    'Outro',
  ];

  const zonaExposicao = ['Urbana', 'Rural', 'Ignorado'];

  const viaExposicao = [
    'Cutanea',
    'Ignorada',
    'Mordida/Picada/Contato',
    'Nao se aplica',
    'Nasal',
    'Ocular',
    'Oral',
    'Otologica',
    'Outra',
    'Parental',
    'Parental Intradermica',
    'Parental Intramuscular',
    'Parental Intravenosa',
    'Parental Subcutanea',
    'Respiratoria/Inalatoria',
    'Retal',
    'Sublingual',
    'Transplacentaria',
    'Vaginal',
  ];

  const CircunstanciaExposicao = [
    'Abstinencia',
    'Abuso',
    'Acidental',
    'Aleitamento Materno',
    'Ambiental',
    'Automedicacao - Indicacao de pessoa nao autorizada',
    'Automedicacao - Iniciativa do proprio paciente/cuidador',
    'Erro de Medicacao - Prescricao Medica Inadequada',
    'Erro de Medicacao - Dispensacao',
    'Erro de Medicacao - Dose',
    'Erro de Medicacao - Outra',
    'Erro de Medicacao - Preparacao',
    'Erro de Medicacao - Rotulagem',
    'Erro de Medicacao - Troca de embalagem',
    'Erro de Medicacao - Troca de nomes',
    'Erro de Medicacao - Via',
    'Ignorada',
    'Ingestao Alimentar',
    'Interacao Medicamentosa',
    'Nao se aplica',
    'Ocupacional',
    'Outra',
    'Reacao Adversa - Alimento',
    'Reacao Adversa - Cosmetico',
    'Reacao Adversa - Medicamento',
    'Tentativa de Abortamento',
    'Tentativa de Suicidio',
    'Uso indevido',
    'Uso Terapeutico',
    'Violencia/Maus tratos/Homicidio',
  ];

  const localMordida = ['Hemicorpo Esquerdo', 'Hemicorpo direito'];

  const FCWidth = {
    width: '20rem',
  };
  const FCWidthMenor = {
    width: '10rem',
  };

  const { control } = useFormContext();

  return (
    <>
      <Box m={4}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Divider></Divider>
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="exposicao.data"
              render={({ field }) => (
                <TextField
                  id="data_exposicao"
                  variant="outlined"
                  fullWidth
                  {...field}
                  type="date"
                />
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Controller
              control={control}
              name="exposicao.horario"
              render={({ field }) => (
                <TextField
                  id="hora_exposicao"
                  variant="outlined"
                  fullWidth
                  {...field}
                  type="time"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="exposicao.tempo_decorrido"
              render={({ field }) => (
                <TextField
                  id="tempo_decorrido"
                  label="Tempo decorrido (00h00min)"
                  variant="outlined"
                  placeholder="Tempo decorrido (00h00min)"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>

          <Grid item xs={3}>
            <Controller
              name="exposicao.tipos.tipo_exposicao"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidthMenor}>
                  <InputLabel id="tipo_exposicao">Tipo</InputLabel>
                  <Select {...field} multiple defaultValue={[]}>
                    {tipoExposicao.map((res) => (
                      <MenuItem value={res} key={res}>
                        {res}
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
              name="exposicao.duracao_exposicao"
              render={({ field }) => (
                <TextField
                  id="duracao"
                  label="Duração"
                  variant="outlined"
                  placeholder="Duração"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>

          <Grid item xs={6}>
            <Controller
              name="exposicao.tipos.local_exposicao"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidth}>
                  <InputLabel id="circunstancia_select">
                    Local da exposicao
                  </InputLabel>
                  <Select {...field} multiple defaultValue={[]}>
                    {localExposicao.map((res) => (
                      <MenuItem value={res} key={res}>
                        {res}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider></Divider>
          </Grid>
          <Grid item xs={3}>
            <Controller
              name="exposicao.tipos.zona_exposicao"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidthMenor}>
                  <InputLabel id="zona_exposicao">Zona Exposicao</InputLabel>
                  <Select {...field} multiple defaultValue={[]}>
                    {zonaExposicao.map((res) => (
                      <MenuItem value={res} key={res}>
                        {res}
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
              name="exposicao.endereco.pais"
              render={({ field }) => (
                <TextField
                  id="endereco_pais"
                  label="País"
                  variant="outlined"
                  placeholder="País"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              control={control}
              name="exposicao.endereco.estado"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Estado"
                  variant="outlined"
                  placeholder="Estado"
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
              name="exposicao.endereco.municipio"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Municipio"
                  variant="outlined"
                  placeholder="Municipio"
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
              name="exposicao.endereco.cep"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="CEP"
                  variant="outlined"
                  placeholder="CEP"
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
              name="exposicao.endereco.bairro"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Bairro"
                  variant="outlined"
                  placeholder="Bairro"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="exposicao.endereco.logradouro"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Logradouro"
                  variant="outlined"
                  placeholder="Logradouro"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="exposicao.endereco.numero"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Numero"
                  variant="outlined"
                  placeholder="Numero"
                  fullWidth
                  {...field}
                  type="number"
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="exposicao.endereco.complemento"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Complemento"
                  variant="outlined"
                  placeholder="Complemento"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name="exposicao.endereco.fone"
              render={({ field }) => (
                <TextField
                  id="estado"
                  label="Fone"
                  variant="outlined"
                  placeholder="Fone"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider></Divider>
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="exposicao.tipos.via_de_exposicao"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidth}>
                  <InputLabel id="via_de_exposicao">
                    Via da Exposicao
                  </InputLabel>
                  <Select {...field} multiple defaultValue={[]}>
                    {viaExposicao.map((res) => (
                      <MenuItem value={res} key={res}>
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
              name="exposicao.tipos.circunstancia_de_exposicao"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidth}>
                  <InputLabel id="circunstancia_select">
                    Circunstancia da Exposicao
                  </InputLabel>
                  <Select {...field} multiple defaultValue={[]}>
                    {CircunstanciaExposicao.map((CircunstanciaExposicao) => (
                      <MenuItem
                        value={CircunstanciaExposicao}
                        key={CircunstanciaExposicao}
                      >
                        {CircunstanciaExposicao}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider></Divider>
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="exposicao.tipos.local_mordida"
              control={control}
              type="text"
              render={({ field }) => (
                <FormControl sx={FCWidth}>
                  <InputLabel id="local_mordida">
                    Local da Mordida/Picada/Contato
                  </InputLabel>
                  <Select {...field} multiple defaultValue={[]}>
                    {localMordida.map((res) => (
                      <MenuItem value={res} key={res}>
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
              name="exposicao.especificar_mordida"
              render={({ field }) => (
                <TextField
                  id="Especificar"
                  label="Especificar"
                  variant="outlined"
                  placeholder="Especificar"
                  fullWidth
                  {...field}
                  type="text"
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Exposicao;
