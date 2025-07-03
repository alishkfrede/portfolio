import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <motion.div whileHover={{ y: -5 }}>
          <IconButton href="https://linkedin.com" target="_blank">
            <LinkedIn fontSize="large" />
          </IconButton>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }}>
          <IconButton href="https://github.com" target="_blank">
            <GitHub fontSize="large" />
          </IconButton>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }}>
          <IconButton href="mailto:example@email.com">
            <Email fontSize="large" />
          </IconButton>
        </motion.div>
      </Box>
      
      <Typography variant="body2" align="center">
        © {currentYear} Мое портфолио. Все права защищены.
      </Typography>
    </Box>
  );
};

export default Footer;