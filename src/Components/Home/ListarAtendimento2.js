import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Container, Paper, Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ListarAtendimento2 = () => {
  const handleClickVisualizar = (event) => {
    alert('Visualizar');
  };
  const handleClickEditar = (event) => {
    console.log('editar');
  };
  const handleClickExcluir = (event) => {
    alert('Excluir');
  };
  return (
    <section>
      <Container maxWidth="xl" fixed>
        <Box mt={5} mb={5}>
          <Paper
            elevation={12}
            style={{
              maxHeight: '70vh',
              overflow: 'auto',
              overflowX: 'auto',
            }}
          >
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="h8"
                        component="h2"
                        align="center"
                        style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
                      >
                        Id
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      {' '}
                      <Typography
                        variant="h8"
                        component="h2"
                        align="center"
                        style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
                      >
                        Centro
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="h8"
                        component="h2"
                        align="center"
                        style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
                      >
                        Tipo de Ficha
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="h8"
                        component="h2"
                        align="center"
                        style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
                      >
                        Exposição
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="h8"
                        component="h2"
                        align="center"
                        style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
                      >
                        Responsável pelo atendimento
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="h8"
                        component="h2"
                        align="center"
                        style={{ fontFamily: 'Alice', fontWeight: 'bold' }}
                      >
                        Ações
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Link to="/edit/1">
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ margin: '0.5rem' }}
                          onClick={handleClickEditar}
                        >
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Link to="/edit/1">
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ margin: '0.5rem' }}
                          onClick={handleClickEditar}
                        >
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Link to="/edit/1">
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ margin: '0.5rem' }}
                          onClick={handleClickEditar}
                        >
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Link to="/edit/1">
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ margin: '0.5rem' }}
                          onClick={handleClickEditar}
                        >
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Link to="/edit/1">
                        <Button
                          variant="contained"
                          color="warning"
                          sx={{ margin: '0.5rem' }}
                          onClick={handleClickEditar}
                        >
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickEditar}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickVisualizar}
                      >
                        Visualizar
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickEditar}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                        onClick={handleClickExcluir}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                      >
                        Visualizar
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ margin: '0.5rem' }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>{' '}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                      >
                        Visualizar
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ margin: '0.5rem' }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>{' '}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      3
                    </TableCell>
                    <TableCell align="center">Xxxx-xxxx</TableCell>
                    <TableCell align="center">Humana</TableCell>
                    <TableCell align="center">Individual</TableCell>
                    <TableCell align="center">Corsi</TableCell>
                    <TableCell align="center" padding="normal" size="medium">
                      <Button
                        variant="contained"
                        color="success"
                        margin="normal"
                        sx={{ margin: '0.5rem' }}
                      >
                        Visualizar
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        sx={{ margin: '0.5rem' }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ margin: '0.5rem' }}
                      >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>{' '}
      </Container>
    </section>
  );
};

export default ListarAtendimento2;
