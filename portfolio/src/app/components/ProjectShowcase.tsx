import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Image from "next/image";

// Define the type for each project
interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link: string;
}

// Define the prop type for the component
interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  return (
    <Box className="w-1/2 pt-5">
      <Typography variant="h6" color="white" className="pb-2">
          Personal Projects
      </Typography>
      {projects.map((project, index) => (
        <Card className="flex"> 
            <CardMedia
              component="img"
              className='w-3/5 pr-2'
              image={project.imageUrl}
              alt="Live from space album cover"
            />
        
            <CardContent>

              <Typography 
                variant="h5" 
                component="a" 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                color="secondary"
                className='hover:text-primary mb-2'
                >
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className='mb-2'>
                Tech Stack: {project.techStack.join(', ')}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom className='mb-2'>
                {project.description}
              </Typography>
              {project.imageUrl && 
                <Typography 
                  variant="body2" 
                  component="a"  
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  color="textSecondary" 
                  gutterBottom>
                    Click here or the {project.title} title to access the live demo.
                </Typography>}
            </CardContent>
      
        </Card> 
      ))}
    </Box>
  );
};

export default ProjectShowcase;