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
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = ['Home', 'Cadastro', 'Listar'];
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {PAGES.map(
            (
              page,
              index, //Remover o map e adicionar as tabes, igual no header !
            ) => (
              <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ),
          )}
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
