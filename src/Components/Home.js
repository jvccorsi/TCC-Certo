import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styles from './Home.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'red',
  padding: '20px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: '0',
  height: '100vh',
}));

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8} md={7}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={4} md={5}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
