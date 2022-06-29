import React, { useEffect, useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Box,
  Button,
  AlertTitle,
  Collapse,
  Alert,
  IconButton,
} from '@mui/material';
import style from '../ResetPassword.module.css';
import { Link, useParams } from 'react-router-dom';
import Head from '../../Head';
import { useHttpClient } from '../../Hooks/http-hook';
import CloseIcon from '@mui/icons-material/Close';
import LoadingSpinner from '../../IUElements/LoadingSpinner';

const ResetPassword = () => {
  const { tokenUsuario, idUsuario } = useParams();
  const [emailUser, setEmailUser] = useState();
  const [senhaTrocada, setSenhaTrocada] = useState(false);
  const [senhaUsuario, setSenhaUsuario] = useState('');
  const [senhaUsuarioConfirmar, setSenhaUsuarioConfirmar] = useState('');
  const [errorSenha, setErrorSenha] = useState();
  const { isLoading, error, sendRequest, open, setOpen } = useHttpClient();

  function handleChangeSenhaUsuario(event) {
    setSenhaUsuario(event.target.value);
  }

  function handleChangeSenhaUsuarioConfirmar(event) {
    setSenhaUsuarioConfirmar(event.target.value);
  }
  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const responseData = await sendRequest(
          `https://api-tcc-unicamp.herokuapp.com/api/users/${idUsuario}`,
          'GET',
        );
        setEmailUser(responseData.email);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserById();
  }, [idUsuario, sendRequest]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (senhaUsuario !== senhaUsuarioConfirmar) {
      setOpen(true);
      setSenhaTrocada(false);
      return setErrorSenha(true);
    } else {
      try {
        await sendRequest(
          'https://api-tcc-unicamp.herokuapp.com/api/users/resetPassword',
          'POST',
          JSON.stringify({
            email: emailUser,
            token: tokenUsuario,
            password: senhaUsuario,
          }),
          {
            'Content-Type': 'application/json',
          },
        );
        setOpen(true);
        return setSenhaTrocada(true);
      } catch (err) {}
    }
  }

  return (
    <>
      <Head title="Reset"></Head>
      {isLoading && <LoadingSpinner asOverlay />}

      <Collapse in={open}>
        {senhaTrocada ? (
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
            Senha redifinida com sucesso
          </Alert>
        ) : errorSenha ? (
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
            <strong>Senhas incorretas ! </strong>
          </Alert>
        ) : error ? (
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
        ) : (
          <p> </p>
        )}
      </Collapse>

      <Container maxWidth="sm" component="article">
        <div className={style.flex_direction_centralize}>
          <Typography
            variant="h3"
            component="h1"
            align="left"
            style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
          >
            Redefina sua senha aqui !
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box mt={2}>
              <TextField
                required
                id="Nova senha"
                label="Nova senha"
                fullWidth
                type="password"
                value={senhaUsuario}
                onChange={handleChangeSenhaUsuario}
                disabled={senhaTrocada}
              />
            </Box>
            <Box mt={2}>
              <TextField
                required
                id="Repita sua nova senha"
                label="Repita sua nova senha"
                fullWidth
                type="password"
                value={senhaUsuarioConfirmar}
                onChange={handleChangeSenhaUsuarioConfirmar}
                disabled={senhaTrocada}
              />
            </Box>

            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: '#FE6969' }}
                size="large"
                fullWidth
                disabled={senhaTrocada}
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
              Cancelar ou voltar ao login
            </Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
