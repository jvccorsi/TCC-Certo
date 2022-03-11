import React from 'react';
import minhaImagem from '../../Assets/Research_Undraw.svg';
import Grid from '@mui/material/Grid';
import styles from './LoginForm.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Divider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Head from '../Head';

const LoginForm = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/home');
  }
  return (
    <Container maxWidth="xl">
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
                <h1 className={styles.text}>Welcome to DataTox</h1>
                <h3 className={styles.text}>
                  New to DataTox?{' '}
                  <Link className={styles.styles_link} to="/create-account">
                    Create an account{' '}
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
                    Or sing up with email address
                  </Divider>
                </Box>
              </div>

              <div className={styles.form_login}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="Username"
                    label="Username"
                    placeholder="Enter your username"
                    variant="standard"
                    type="text"
                    autoFocus
                    margin="normal"
                    required
                    className={styles.textfield_options}
                  />

                  <Box mb={3} mt={0}>
                    <TextField
                      label="Senha"
                      margin="normal"
                      variant="standard"
                      type="password"
                      required
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
                        <p>Remember this Device</p>
                      </div>
                    </Grid>
                    <Grid item xs={5} sm={6}>
                      <Link
                        className={styles.styles_link}
                        to="/reset-password"
                        style={{ color: '#01A8FF' }}
                      >
                        Reset Password
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
  );
};

export default LoginForm;
