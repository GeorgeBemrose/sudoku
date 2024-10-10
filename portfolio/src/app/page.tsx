'use client'

import Image from "next/image";
import NavBar from "../../components/NavBar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Box, Typography, Container, Card } from '@mui/material';





import Link from 'next/link';
import EmailButton from "../../components/EmailButton";
import TechCards from "../../components/TechCards";

export default function Home() {
  return (<>

    <Container
      maxWidth={false}
      className="bg-gradient-to-br from-sky-900 to-blue-800 min-h-screen"
    >
      <NavBar currentPage="Home" textColor="white" />
      <Container
        maxWidth="md">

        <Box className="flex p-4">
          <Box
            className="w-1/2">
            <Typography variant="h3">George Bemrose</Typography>
            <Typography variant="h4">Full Stack Developer</Typography>
            <TechCards/>
          </Box>
          <Box className="w-1/2">

            <Box className="flex space-x-4 justify-center">
              {/* LinkedIn Button */}
              <Button
                variant="contained"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
                startIcon={<LinkedInIcon />}
                target="_blank"
                href="https://www.linkedin.com/in/georgebemrose/"
              >
                LinkedIn
              </Button>

              {/* GitHub Button */}
              <Button
                variant="contained"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
                startIcon={<GitHubIcon />}
                target="_blank"
                href="https://github.com/GeorgeBemrose"
              >
                GitHub
              </Button>


              <Button
                variant="contained"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                startIcon={<EmailIcon />}
                href="mailto:georgebemrose@gmail.com"
              >
                Email
              </Button>
            </Box>
            <Image src="/Headshot.png" alt='Headshot' width={100} height={100} // This is the base height
              layout="responsive" // Automatically adjusts based on container width
              className="rounded-lg p-4" />
          </Box>
        </Box>


      </Container>
    </Container>

  </>);
}

