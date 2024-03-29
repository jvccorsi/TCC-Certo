import React, { useContext, useState } from 'react';
import minhaImagem from '../../Assets/Research_Undraw.svg';
import Grid from '@mui/material/Grid';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Box,
  Modal,
  Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Head from '../Head';
import { AuthContext } from '../Hooks/AuthContext';

//SPINNER:
import LoadingSpinner from '../IUElements/LoadingSpinner';
import { useHttpClient } from '../Hooks/http-hook';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginForm = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //Hook httpclient
  const { isLoading, error, sendRequest, clearError, open, setOpen } =
    useHttpClient();

  //MODAL:
  const handleClose = () => {
    setOpen(false);
    clearError();
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        'https://api-tcc-unicamp.herokuapp.com/api/users/login',
        'POST',
        JSON.stringify({
          email: email,
          password: password,
        }),
        {
          'Content-Type': 'application/json',
        },
      );
      auth.login(responseData.userId, responseData.token);
    } catch (err) {}
  }

  function handleChangeUsername(event) {
    setEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ocorreu um erro!!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {error}
          </Typography>
          <Box maxWidth={false}>
            <Button
              onClick={handleClose}
              variant="contained"
              style={{ backgroundColor: '#FE6969' }}
              size="small"
              className={styles.textfield_options}
            >
              Fechar
            </Button>
          </Box>
        </Box>
      </Modal>
      <Container maxWidth="xl">
        {isLoading && <LoadingSpinner asOverlay />}

        <Head title="Login"></Head>
        <Grid container className={styles.grid_content}>
          <Grid item xs={7} sm={7}>
            <div className={styles.tratar_img}>
              <img
                src={minhaImagem}
                alt="research_undraw"
                className={styles.img}
              />
            </div>
          </Grid>

          <Grid item xs={5} sm={5}>
            <div className={styles.flex_direction_centralize}>
              <div className={styles.infos_login}>
                <div className={styles.title_home}>
                  <h1 className={styles.text}>Bem vindo ao UniTox</h1>
                  <h3 className={styles.text}>
                    Você é novo aqui?{' '}
                    <Link className={styles.styles_link} to="/create-account">
                      Crie sua conta agora{' '}
                    </Link>
                  </h3>
                </div>

                <div className={styles.form_login}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      id="email_hook"
                      name="email_hook"
                      label="Email"
                      placeholder="Digite aqui o seu email"
                      variant="standard"
                      type="email"
                      autoFocus
                      margin="normal"
                      onChange={handleChangeUsername}
                      required
                      value={email}
                      className={styles.textfield_options}
                    />

                    <Box mb={3} mt={0}>
                      <TextField
                        label="Senha"
                        id="password_hook"
                        margin="normal"
                        variant="standard"
                        type="password"
                        required
                        value={password}
                        onChange={handleChangePassword}
                        className={styles.textfield_options}
                      />
                    </Box>

                    <Grid container className={styles.button}>
                      <Grid item xs={7} sm={6}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 20,
                          }}
                        >
                          <Checkbox defaultChecked />
                          <p>Relembrar login</p>
                        </div>
                      </Grid>
                      <Grid item xs={5} sm={6}>
                        <Link
                          className={styles.styles_link}
                          to="/forgot-password"
                          style={{ color: '#01A8FF' }}
                        >
                          Esqueci minha senha
                        </Link>
                      </Grid>
                    </Grid>

                    <div className={styles.textfield_options}>
                      <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: '#FE6969' }}
                        size="large"
                        className={styles.textfield_options}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LoginForm;
