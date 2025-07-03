import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Обо мне
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Привет! Я фронтенд-разработчик с опытом создания современных веб-приложений.
            Специализируюсь на React, TypeScript и экосистеме связанных технологий.
          </Typography>
        </motion.div>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h5" gutterBottom>
                Образование
              </Typography>
              <Typography>
                ПИ-230, Международный институт дизайна и сервиса
              </Typography>
            </motion.div>
          </Grid>
          
          <Grid >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="h5" gutterBottom>
                Интересы
              </Typography>
              <Typography>
                Веб-разработка, UI/UX дизайн, современные фреймворки
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;