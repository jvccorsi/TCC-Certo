import { Container, TextField, Typography, Box } from '@mui/material';
import React from 'react';
import style from './ResetPassword.module.css';

const ResetPassword = () => {
  return (
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
            />
          </Box>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
