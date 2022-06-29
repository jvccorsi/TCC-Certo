import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  Alert,
  Collapse,
  IconButton,
  AlertTitle,
} from '@mui/material';
import style from './ResetPassword.module.css';
import { Link } from 'react-router-dom';
import Head from '../Head';
import { useHttpClient } from '../Hooks/http-hook';
import LoadingSpinner from '../IUElements/LoadingSpinner';
import CloseIcon from '@mui/icons-material/Close';

const ForgotPassword = () => {
  const [emailUsuario, setEmailUsuario] = useState('');
  const [emailEnviado, setEmailEnviado] = useState(false);
  const { isLoading, error, sendRequest, open, setOpen } = useHttpClient();

  function handleChangeEmailUsuario(event) {
    setEmailUsuario(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await sendRequest(
        'https://api-tcc-unicamp.herokuapp.com/api/users/forgotPassword',
        'POST',
        JSON.stringify({
          email: emailUsuario,
        }),
        {
          'Content-Type': 'application/json',
        },
      );
      setEmailEnviado(true);
      setOpen(true);
    } catch (err) {}
  }

  return (
    <>
      <Head title="Reset"></Head>
      {isLoading && <LoadingSpinner asOverlay />}

      <Collapse in={open}>
        {emailEnviado ? (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            severity="success"
          >
            <AlertTitle>Sucesso!</AlertTitle>
            Um email para redifinição de senha foi enviado para{' '}
            <strong>{emailUsuario}</strong>
          </Alert>
        ) : (
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            Aconteceu algum erro:<strong>{error}</strong>
          </Alert>
        )}
      </Collapse>
      <Container maxWidth="sm">
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

          <form onSubmit={handleSubmit}>
            <Box mt={2}>
              <TextField
                required
                id="Email address"
                label="Endereço de email"
                variant="standard"
                fullWidth
                type="email"
                value={emailUsuario}
                disabled={emailEnviado}
                onChange={handleChangeEmailUsuario}
              />
            </Box>

            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: '#FE6969' }}
                size="large"
                fullWidth
                disabled={emailEnviado}
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

export default ForgotPassword;
