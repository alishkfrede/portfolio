import React from 'react';
import { Box, Typography, Button } from '@mui/material'; 
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        color: 'white',
        width: '100vw', 
        maxWidth: '100%', 
        px: 2, 
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/images/pattern.svg)',
          backgroundSize: 'cover',
          opacity: 0.2,
          y: useTransform(useScroll().scrollY, [0, 300], [0, 100]),
        }}
      />
      
      <Box 
        sx={{
          width: '100%',
          maxWidth: 1200, 
          mx: 'auto', 
          textAlign: 'center', 
          zIndex: 1, 
          px: 3, 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Привет, я Али
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Фронтенд-разработчик и UI/UX энтузиаст
          </Typography>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="/projects"
              sx={{ 
                px: 5, 
                py: 1.5,
                fontWeight: 'bold'
              }}
            >
              Посмотреть работы
            </Button>
          </motion.div>
        </motion.div>
      </Box>
      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </Box>
  );
};

export default HeroSection;