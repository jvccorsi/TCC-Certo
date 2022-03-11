import { Container, Paper, Box } from '@mui/material';
import React from 'react';
import Head from '../Head';
import minhaImagem from '../../Assets/HomeImage.svg';

const styles = {
  paperContainer: {
    backgroundImage: `url(${minhaImagem})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
    height: '100%',
    borderRadius: '20px',
    backgroundColor: '#F4F4F4',
  },
};

const HomePage = () => {
  return (
    <>
      <Head title="Home"></Head>
      <section>
        <Container maxWidth="xl" fixed>
          <Box mt={2} sx={{ height: '100vh' }} mb={5}>
            <Paper style={styles.paperContainer} elevation={12}></Paper>
          </Box>{' '}
        </Container>
      </section>
    </>
  );
};

export default HomePage;
