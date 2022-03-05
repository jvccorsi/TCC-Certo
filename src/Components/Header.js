import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ReactComponent as Logo } from '../Assets/logo.svg'; // Transformar o svg em components

const Header = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth="xl" className={styles.container} fixed>
        <nav className={styles.nav}>
          <Link className={styles.logo} to="/">
            <Logo />
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
