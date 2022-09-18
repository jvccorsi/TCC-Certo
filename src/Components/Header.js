import React, { useContext, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Box,
  Tabs,
  Tab,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from '@mui/material';
import { ReactComponent as Logo } from '../Assets/logo.svg'; // Transformar o svg em components
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DrawerComp from './DrawerComp';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import { AuthContext } from './Hooks/AuthContext';
import { useHttpClient } from './Hooks/http-hook';

const Header = () => {
  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [nomeUser, setNomeUser] = React.useState();
  const auth = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { sendRequest } = useHttpClient();
  const navigateByHome = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    const fetchUserById = async () => {
      if (auth.isLoggedIn && auth.userId) {
        try {
          const responseData = await sendRequest(
            `https://api-tcc-unicamp.herokuapp.com/api/users/${auth.userId}`,
            'GET',
          );
          setNomeUser(responseData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchUserById();
  }, [auth.isLoggedIn, sendRequest, auth.userId]);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigateByHome();
    auth.logout();
  };
  return (
    <header className={styles.header}>
      <Container maxWidth="xl" className={styles.container} fixed>
        <nav className={styles.nav}>
          <Grid container>
            <Grid item sm={3}>
              {auth.isLoggedIn ? (
                <Link className={styles.logo} to="/home">
                  <Logo />
                </Link>
              ) : (
                <Link className={styles.logo} to="/">
                  <Logo />
                </Link>
              )}
            </Grid>
            {auth.isLoggedIn && (
              <Grid item sm={9}>
                <Box
                  display="flex"
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                  className={styles.menu_itens}
                >
                  {isMatch ? (
                    <>
                      <DrawerComp></DrawerComp>
                    </>
                  ) : (
                    <Tabs
                      value={value}
                      indicatorColor="primary"
                      onChange={handleChange}
                      sx={{ marginLeft: 'auto' }}
                    >
                      <Tab
                        style={{ textDecoration: 'none', color: 'black' }}
                        label="Home"
                        component={Link}
                        to="/home"
                      />
                      <Tab
                        style={{ textDecoration: 'none', color: 'black' }}
                        label="Cadastrar"
                        component={Link}
                        to="/home/cadastro"
                      />
                      <Tab
                        style={{ textDecoration: 'none', color: 'black' }}
                        label="Atendimentos "
                        component={Link}
                        to="/home/listar"
                      />

                      <Tab
                        label={
                          <Box
                            display="flex"
                            justiftContent="center"
                            alignItems="center"
                            fontFamily="Alice"
                          >
                            <Avatar
                              src="/broken-image.jpg"
                              sx={{
                                height: '30px',
                                width: '30px',
                                marginRight: '1rem',
                              }}
                            />

                            {nomeUser && <p>{nomeUser.name} </p>}

                            <IconButton onClick={handleClick} size="small">
                              <ExpandMoreIcon fontSize="small" />
                            </IconButton>
                            <Menu
                              anchorEl={anchorEl}
                              id="account-menu"
                              open={open}
                              onClose={handleClose}
                              onClick={handleClose}
                              PaperProps={{
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter:
                                    'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                  },
                                  '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              }}
                              transformOrigin={{
                                horizontal: 'right',
                                vertical: 'top',
                              }}
                              anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'bottom',
                              }}
                            >
                              <MenuItem>
                                <ListItemButton onClick={handleLogout}>
                                  <ListItemIcon>
                                    <Logout fontSize="small" />
                                  </ListItemIcon>
                                  Logout
                                </ListItemButton>
                              </MenuItem>
                            </Menu>
                          </Box>
                        }
                      />
                    </Tabs>
                  )}
                </Box>
              </Grid>
            )}
          </Grid>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
