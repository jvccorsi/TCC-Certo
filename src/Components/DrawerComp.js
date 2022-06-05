import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  let navigate = useNavigate();

  const navigateByHome = () => {
    navigate('../home', { replace: true });
  };

  const navigateByCadastro = () => {
    navigate('../home/cadastro', { replace: true });
  };
  const navigateByAtendimentoe = () => {
    navigate('../home/listar', { replace: true });
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={navigateByHome}>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={navigateByCadastro}>Cadastro</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={navigateByAtendimentoe}>
                Atendimento
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: '#1B57B0', marginLeft: 'auto' }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  );
};

export default DrawerComp;
