import React from 'react';
import { Container, TextField, Typography, Box, Button } from '@mui/material';
import style from '../ResetPassword.module.css';
import { Link, useParams } from 'react-router-dom';
import Head from '../../Head';

const ResetPassword = () => {
  const { tokenUsuario, idUsuario } = useParams();

  return (
    <>
      <Head title="Reset"></Head>
      <Container maxWidth="sm" component="article">
        <div className={style.flex_direction_centralize}>
          <Typography
            variant="h3"
            component="h1"
            align="left"
            style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
          >
            id: {idUsuario}, Redefina sua senha aqui ! Token: {tokenUsuario}
          </Typography>
          <form>
            <Box mt={2}>
              <TextField
                required
                id="Nova senha"
                label="Nova senha"
                defaultValue=""
                fullWidth
                type="password"
              />
            </Box>
            <Box mt={2}>
              <TextField
                required
                id="Repita sua nova senha"
                label="Repita sua nova senha"
                defaultValue=""
                fullWidth
                type="password"
              />
            </Box>

            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: '#FE6969' }}
                size="large"
                fullWidth
              >
                Resetar senha
              </Button>
            </Box>
          </form>
          <Typography
            variant="h6"
            component="h1"
            align="center"
            style={{ fontFamily: 'Alice' }}
            mt={2}
          >
            <Link className={style.styles_link} to="/">
              Cancelar e voltar ao login
            </Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
