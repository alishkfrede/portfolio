import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import { type Project } from '../types/types';

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "АСУ Соревнования по футболу",
      description: "Полнофункциональное приложение под футбольные чемпионаты",
      imageUrl: "",
      technologies: ["C#", "Sql"],
      repoUrl: "",
      demoUrl: ""
    },
    {
      id: 2,
      title: "Болельщик",
      description: "Mini приложение VK для отслеживания футбольных матчей европы",
      imageUrl: "",
      technologies: ["React", "TS", "Js", "Node.js", "Git"],
      repoUrl: "",
      demoUrl: ""
    },
    {
      id: 3,
      title: "Мини игра FNAF",
      description: "Миниатюрная версия игры FNAF",
      imageUrl: "",
      technologies: ["C#", "MonoGame"],
      repoUrl: "",
      demoUrl: ""
    }
  ];

  return (
    <Box 
      sx={{
        width: '100vw',
        maxWidth: '100%',
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <Box sx={{ 
        width: '100%', 
        maxWidth: 1500,
        mx: 'auto'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 6,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Мои проекты
          </Typography>
          
          <Grid 
            container 
            spacing={4} 
            justifyContent="center"
            sx={{ width: '100%', mx: 'auto' }}
          >
            {projects.map((project, index) => (
              <Grid>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ProjectsPage;