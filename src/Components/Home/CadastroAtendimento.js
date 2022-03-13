import { Container, Paper, Box } from '@mui/material';
import React, { useState } from 'react';
import LinearStepper from './Stepper/LinearStepper';

const CadastroAtendimento = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={5}>
        <Box mt={5} p={2}>
          <LinearStepper></LinearStepper>
        </Box>
      </Paper>
    </Container>
  );
};

export default CadastroAtendimento;
