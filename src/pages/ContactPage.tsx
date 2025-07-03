import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import { LinkedIn, Email, GitHub } from '@mui/icons-material';

const ContactPage: React.FC = () => {
  return (
    <Box 
      sx={{ 
        width: '100vw',
        maxWidth: '100%',
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <Box sx={{ 
        width: '100%', 
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Свяжитесь со мной
          </Typography>
          
          <Grid 
            container 
            spacing={8} 
            sx={{ 
              mt: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ 
                  width: '100%', 
                  maxWidth: 500,
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <ContactForm />
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ 
                  width: '100%', 
                  maxWidth: 500,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Контактная информация
                </Typography>
                
                <Box sx={{ 
                  mt: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  <Email sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                  <Typography variant="h6">ali.valiev.05@email.com</Typography>
                </Box>
                
                <Box sx={{ 
                  mt: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  <GitHub sx={{ mr: 2, color: 'text.primary', fontSize: 30 }} />
                  <Typography variant="h6">github.com/alishkfrede</Typography>
                </Box>
                
                
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{ 
                    marginTop: '2.5rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Box sx={{ 
                    backgroundColor: 'background.paper', 
                    borderRadius: 2,
                    p: 3,
                    boxShadow: 3,
                    width: '100%',
                    maxWidth: 450,
                    textAlign: 'center'
                  }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: '1.1rem', 
                        lineHeight: 1.7,
                        textAlign: 'center'
                      }}
                    >
                      Я всегда открыт для новых возможностей и сотрудничества. 
                      Не стесняйтесь связаться со мной, и я отвечу как можно скорее!
                    </Typography>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContactPage;