import React from 'react';
import { Box, Typography, LinearProgress, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { type Skill } from '../../types/types';

type SkillsListProps = {
  skills: Skill[];
};

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <Grid container spacing={4}>
    {skills.map((skill, index) => (
      <Grid >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              {skill.name}
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={skill.level * 10} 
              sx={{ 
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                }
              }} 
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {skill.level}/10
            </Typography>
          </Box>
        </motion.div>
      </Grid>
    ))}
  </Grid>
);

export default SkillsList;