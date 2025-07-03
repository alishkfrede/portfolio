import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SkillsList from '../components/skills/SkillList';
import { type Skill } from '../types/types';

const SkillsPage: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript/TypeScript", level: 9 },
    { name: "React", level: 9 },
    { name: "HTML/CSS", level: 8 },
    { name: "Redux", level: 8 },
    { name: "Node.js", level: 7 },
    { name: "UI/UX Design", level: 6 },
  ];

  return (
    <Box 
      sx={{ 
        width: '100vw',
        maxWidth: '100%',
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 800 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Мои навыки
          </Typography>
          
          <Box sx={{ mt: 6 }}>
          <SkillsList skills={skills} />
        </Box>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: '3rem' }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Дополнительные компетенции
          </Typography>
          <Typography align="center">
            Git, Webpack, Docker, Figma, Agile/Scrum
          </Typography>
        </motion.div>
      </motion.div>
      </Box>
    </Box>
  );
};

export default SkillsPage;