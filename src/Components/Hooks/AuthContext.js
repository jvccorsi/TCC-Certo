import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {
    console.log('aaa context');
  },
  logout: () => {},
});
