import React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Container>
      <Grid container spacing={9}>
        <Grid item xs={8} md={7}>
          <p className={styles.grid}>xs=6 md=4</p>
        </Grid>
        <Grid item xs={4} md={5}>
          <p className={styles.grid2}>xs=6 md=4</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
