import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { type Project } from '../../types/types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={project.imageUrl}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          {project.technologies.map((tech, index) => (
            <Chip key={index} label={tech} size="small" />
          ))}
        </Stack>
      </CardContent>
      
      <Stack direction="row" spacing={1} sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          href={project.repoUrl} 
          target="_blank"
          size="small"
        >
          Репозиторий
        </Button>
        {project.demoUrl && (
          <Button 
            variant="contained" 
            href={project.demoUrl} 
            target="_blank"
            size="small"
          >
            Демо
          </Button>
        )}
      </Stack>
    </Card>
  </motion.div>
);

export default ProjectCard;