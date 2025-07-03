import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type ThemeToggleProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => (
  <Tooltip title={darkMode ? "Светлая тема" : "Тёмная тема"}>
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  </Tooltip>
);

export default ThemeToggle;