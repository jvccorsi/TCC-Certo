import { Container, TextField, Typography, Box, Button } from '@mui/material';
import React from 'react';
import style from './ResetPassword.module.css';
import { Link } from 'react-router-dom';
import Head from '../Head';

const ResetPassword = () => {
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
            Esqueceu sua senha?
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            align="left"
            style={{ fontFamily: 'Alice' }}
          >
            Por favor, entre com o endereço de email associado a sua conta e nos
            enviaremos um email com um link para você alterar sua senha!
          </Typography>

          <form>
            <Box mt={2}>
              <TextField
                required
                id="Email address"
                label="Endereço de email"
                defaultValue=" "
                fullWidth
                type="email"
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
              Voltar ao login
            </Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
