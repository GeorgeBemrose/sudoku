'use client'

import Image from "next/image";
import NavBar from "./components/NavBar";
import { Button, Box, Typography, Container, Card } from '@mui/material';
import TechCards from "./components/TechCards";
import PlaceIcon from '@mui/icons-material/Place';
import ContactBar from "./components/ContactBar";
import ExpProjTab from "./components/ExpProjTab";

import ProjectsList from './components/ProjectShowcase';

import projectsData from './data/projects.json'

export default function Home() {
  return (<>

    <Container
      maxWidth={false}
      className="bg-primary min-h-screen"
    >
      {/* <NavBar currentPage="Home" textColor="white" /> */}
      <Container
        maxWidth="lg" className="pt-4">

        <Box className="md:flex p-4">
          <Box className="flex flex-col md: w-1/2 ">
            <Box className="pb-4">
              
              <Typography variant="h2" color="white">George Bemrose</Typography>
              <Typography variant="h5" color="white">Full Stack Developer</Typography>
              <Box className="flex items-center">
                <PlaceIcon sx={{ color: 'white' }} /> <Typography variant="h6" color="white">London, UK</Typography>
              </Box>
            </Box>
            <Box>
              <ContactBar />
              <TechCards />
            </Box>
          </Box>

          <Box className="md: w-1/2 m-auto">


            <Image src="/Headshot.png" alt='Headshot'  // This is the base height
              width={350}
              height={350}

              className="rounded-lg p-4 m-auto"
              priority

            />
          </Box>
        </Box>
        <Box className="flex">
          <ExpProjTab />
          <ProjectsList projects={projectsData} />
        </Box>

      </Container>
    </Container>

  </>);
}

