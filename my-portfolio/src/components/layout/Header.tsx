import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Проекты', path: '/projects' },
    { label: 'Навыки', path: '/skills' },
    { label: 'Контакты', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Портфолио
          </Typography>
          
          <nav>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ 
                  mx: 1,
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal'
                }}
              >
                {item.label}
              </Button>
            ))}
          </nav>
          
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;