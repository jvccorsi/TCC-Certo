import { Container, TextField, Typography, Box, Button } from '@mui/material';
import React from 'react';
import style from './ResetPassword.module.css';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <Container maxWidth="sm" component="article">
        <div className={style.flex_direction_centralize}>
          <Typography
            variant="h3"
            component="h1"
            align="left"
            style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
          >
            Forgot your password?
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            align="left"
            style={{ fontFamily: 'Alice' }}
          >
            Pleasse enter the email address associated with your account and We
            will email you link to reset your password.
          </Typography>

          <form>
            <Box mt={2}>
              <TextField
                required
                id="Email address"
                label="Email address"
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
                Reset Password
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
              Back to login
            </Link>
          </Typography>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
