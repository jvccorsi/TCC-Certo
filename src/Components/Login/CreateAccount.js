import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Grid,
  Divider,
  Box,
  Modal,
  Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import undraw_create from '../../Assets/undraw_medical_research_qg4d 1.svg';
import Head from '../Head';
// import { AuthContext } from '../Hooks/AuthContext';

//MODAL:
import LoadingSpinner from '../IUElements/LoadingSpinner';
import { useHttpClient } from '../Hooks/http-hook';

//HOOK HTTP CLIENT:

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

const CreateAccount = () => {
  // const auth = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [cadastro, setCadastro] = useState(false);

  //Hook httpclient
  const { isLoading, error, sendRequest, clearError, open, setOpen } =
    useHttpClient();

  const navigate = useNavigate();
  //MODAL:

  const handleClose = () => {
    setOpen(false);
    clearError();
    if (cadastro) {
      navigate('/');
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        'https://api-tcc-unicamp.herokuapp.com/api/users/signup',
        'POST',
        JSON.stringify({
          name: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
        {
          'Content-Type': 'application/json',
        },
      );
      setCadastro(true);
      if (cadastro) setOpen(true);
      // auth.login(responseData.user.id); Login pós cadastro
      console.log(responseData);
    } catch (err) {}
  }

  function handleChangeFirstName(event) {
    setFirstName(event.target.value);
  }
  function handleChangeLastName(event) {
    setLastName(event.target.value);
  }
  function handleChangeEmail(event) {
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
          {cadastro ? (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cadastro realizado com sucesso!!
            </Typography>
          ) : (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ocorreu um erro!!
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {error}
              </Typography>
            </Typography>
          )}

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

      <section>
        <Head title="Create"></Head>
        <Container maxWidth="xl">
          <Grid container className={styles.grid_content}>
            <Grid item xs={6} sm={7}>
              <div className={styles.tratar_img}>
                <img
                  src={undraw_create}
                  alt="research_undraw"
                  className={styles.img}
                />
              </div>
            </Grid>

            <Grid item xs={6} sm={5}>
              {isLoading && <LoadingSpinner asOverlay />}
              <div className={styles.flex_direction_centralize}>
                <div className={styles.infos_login}>
                  <div className={styles.title_home}>
                    <h2 className={styles.text}>Crie sua conta grátis</h2>
                    <h3 className={styles.text}>
                      Você já tem uma conta?{' '}
                      <Link className={styles.styles_link} to="/">
                        Faça seu login{' '}
                      </Link>
                    </h3>

                    <Button
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: 'Alice',
                      }}
                      variant="outlined"
                      size="large"
                      className={styles.google_button}
                      startIcon={<GoogleIcon style={{ color: 'red' }} />}
                    >
                      Google
                    </Button>
                    <Box mt={3}>
                      <Divider className={styles.Divider}>
                        Ou se cadastre com seu email e senha
                      </Divider>
                    </Box>
                  </div>

                  <div className={styles.form_login}>
                    <form onSubmit={handleSubmit}>
                      <Grid container>
                        <Grid item sm={6}>
                          <Box mr={2}>
                            <TextField
                              id="first_name"
                              label="Nome"
                              variant="standard"
                              type="text"
                              autoFocus
                              margin="normal"
                              required
                              className={styles.textfield_options}
                              value={firstName}
                              onChange={handleChangeFirstName}
                            />
                          </Box>
                        </Grid>
                        <Grid item sm={6}>
                          <TextField
                            id="last_name"
                            label="Sobrenome"
                            variant="standard"
                            type="text"
                            margin="normal"
                            required
                            fullWidth
                            className={styles.textfield_options}
                            value={lastName}
                            onChange={handleChangeLastName}
                          />
                        </Grid>
                      </Grid>
                      <Box mt={2} mb={4}>
                        <TextField
                          id="email"
                          label="Endereço de email"
                          placeholder="Endereço de email"
                          variant="standard"
                          type="email"
                          required
                          className={styles.textfield_options}
                          value={email}
                          onChange={handleChangeEmail}
                        />
                      </Box>

                      <Box mt={2} mb={4}>
                        <TextField
                          label="Senha"
                          id="password"
                          variant="standard"
                          type="password"
                          required
                          inputProps={{ minLength: 8 }}
                          className={styles.textfield_options}
                          value={password}
                          onChange={handleChangePassword}
                        />
                      </Box>

                      <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: '#FE6969' }}
                        size="large"
                        className={styles.textfield_options}
                      >
                        Registrar
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default CreateAccount;
