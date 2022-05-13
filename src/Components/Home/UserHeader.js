import React from 'react';
import { Container, Box } from '@mui/material';

import { useLocation } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    const { pathname } = location;
    if ('/home' === pathname) setTitle('Home');
    else if ('/home/cadastro' === pathname) setTitle('Cadastrar');
    else if ('/home/listar' === pathname) setTitle('Atendimentos');
    else if ('/home/visualizar' === pathname) setTitle('Visualizar');
    else if ('/home/editar' === pathname) setTitle('Visualizar');
    else setTitle('');
  }, [location]);

  return (
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
          {title === 'Home' ? (
            <HomeOutlinedIcon color="primary" fontSize="large" />
          ) : title === 'Cadastrar' ? (
            <AddOutlinedIcon color="primary" fontSize="large" />
          ) : (
            <ReceiptOutlinedIcon color="primary" fontSize="large" />
          )}

          <h1
            style={{
              fontFamily: 'Alice',
              color: '#0072FF',
              fontSize: 40,
              textAlign: 'left',
              marginLeft: '2%',
            }}
          >
            {title}
          </h1>
        </Box>
      </Container>
    </section>
  );
};

export default UserHeader;
