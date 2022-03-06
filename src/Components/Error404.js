import { Typography, Container, Box, Button } from '@mui/material';
import React from 'react';
import minhaImagem from '../Assets/undraw_page_not_found_re_e9o6 1.svg';
import styles from './Error.module.css';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }
  return (
    <Container maxWidth="xl" align="center" className={styles.container_error}>
      <Typography variant="h4" align="center" m={2}>
        Sorry, page not found !
      </Typography>
      <div className={styles.error_img}>
        <img src={minhaImagem} alt="research_undraw" />
      </div>
      <Box mt={3}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          className={styles.button_error}
          onClick={handleClick}
        >
          Voltar
        </Button>
      </Box>
    </Container>
  );
};

export default Error404;
