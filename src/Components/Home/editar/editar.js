import React from 'react';
import { Container, Box, Button } from '@mui/material';
import { useParams } from 'react-router';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Link } from 'react-router-dom';

const Editar = () => {
  const { id } = useParams();
  return (
    <>
      <section>
        <Container maxWidth="xl" fixed>
          <Box
            mt={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <ReceiptOutlinedIcon color="primary" fontSize="large" />

            <h1
              style={{
                fontFamily: 'Alice',
                color: '#0072FF',
                fontSize: 40,
                textAlign: 'left',
                marginLeft: '2%',
              }}
            >
              {' '}
              Editar - {atob(id)}
            </h1>
          </Box>

          <Link to="/home/listar">
            <Button variant="contained">Voltar</Button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Editar;
