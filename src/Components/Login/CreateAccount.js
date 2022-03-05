import React from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Grid,
  Divider,
  Box,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import undraw_create from '../../Assets/undraw_medical_research_qg4d 1.svg';

const CreateAccount = () => {
  return (
    <section>
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
            <div className={styles.flex_direction_centralize}>
              <div className={styles.infos_login}>
                <div className={styles.title_home}>
                  <h2 className={styles.text}>Get started absolutely free</h2>
                  <h3 className={styles.text}>
                    Already have an Account?{' '}
                    <Link className={styles.styles_link} to="/">
                      Sing in{' '}
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
                  <form>
                    <Grid container>
                      <Grid item sm={6}>
                        <Box mr={2}>
                          <TextField
                            id="first_name"
                            label="First Name"
                            variant="standard"
                            type="text"
                            autoFocus
                            margin="normal"
                            required
                            className={styles.textfield_options}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={6}>
                        <TextField
                          id="last_name"
                          label="Last name"
                          variant="standard"
                          type="text"
                          margin="normal"
                          required
                          fullWidth
                          className={styles.textfield_options}
                        />
                      </Grid>
                    </Grid>
                    <Box mt={2} mb={4}>
                      <TextField
                        id="email"
                        label="Email Address"
                        placeholder="Enter your username"
                        variant="standard"
                        type="email"
                        required
                        className={styles.textfield_options}
                      />
                    </Box>

                    <Box mt={2} mb={4}>
                      <TextField
                        label="Password"
                        id="password"
                        variant="standard"
                        type="password"
                        required
                        className={styles.textfield_options}
                      />
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: '#FE6969' }}
                      size="large"
                      className={styles.textfield_options}
                    >
                      Register
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CreateAccount;
