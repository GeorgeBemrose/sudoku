import { FaPython, FaReact, FaGitAlt, FaLinux, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiApachekafka } from 'react-icons/si';
import { Card, CardContent, Typography, Box } from '@mui/material';

const techStack = [
  { name: 'TypeScript', icon: <SiTypescript  />, color:"blue" },
  { name: 'React', icon: <FaReact />, color:"blue" },
  { name: 'Python', icon: <FaPython  />, color:"blue" },
  { name: 'Kafka', icon: <SiApachekafka />, color:"black" },
  { name: 'Git', icon: <FaGitAlt />, color:"orange" },
  { name: 'Linux', icon: <FaLinux />, color:"yellow" },
  { name: 'Docker', icon: <FaDocker />, color:"blue" },
];

export default function TechCards() {
  return (
    <Box className="flex flex-wrap">
      {techStack.map((tech) => (
        <Box 
            key={tech.name} 
            className="flex items-center p-1"
            sx={{mr:2, borderRadius: 2, boxShadow: 1, bgcolor: '#fff'}}
            >
            {/* Icon */}
            <Box className="text-4xl" sx={{mr:1}}>
              {tech.icon}
            </Box>
            {/* Technology Name */}
            <Typography variant="h6" className="text-gray-800 font-semibold pl-1">
              {tech.name}
            </Typography>
          
        </Box>
      ))}
    </Box>
  );
}
