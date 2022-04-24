import { Container, Paper, Box } from '@mui/material';
// import React, { useState } from 'react';
import LinearStepper from './Stepper/LinearStepper';

const CadastroAtendimento = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="md">
        <Paper elevation={5} style={{ maxHeight: '70vh', overflow: 'auto' }}>
          <Box mt={5} p={2}>
            <LinearStepper></LinearStepper>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CadastroAtendimento;
