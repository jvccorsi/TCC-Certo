import React from 'react';
import minhaImagem from '../Assets/Research_Undraw.svg';
import Grid from '@mui/material/Grid';
import styles from './Home.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const Home = () => {
  return (
    <div>
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

        <Grid item container xs={5} sm={5}>
          <div className={styles.flex_direction_centralize}>
            <div className={styles.infos_login}>
              <div className={styles.title_home}>
                <h1 className={styles.text}>Welcome to DataTox</h1>
                <h3 className={styles.text}>
                  New to DataTox?{' '}
                  <span style={{ color: 'blue' }}> Create an account</span>
                </h3>

                <div>
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
                </div>
              </div>

              <div className={styles.form_login}>
                <form>
                  <div>
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
                  </div>
                  <div>
                    <TextField
                      label="Senha"
                      margin="normal"
                      variant="standard"
                      type="password"
                      required
                      className={styles.textfield_options}
                    />
                  </div>

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
                    <Grid item xs={7} sm={6}>
                      <Link to="/login/perdeu">Perdeu a senha? </Link>
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
                      Próximo
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
