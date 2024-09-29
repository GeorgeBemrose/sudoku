'use client'

import { Container } from '@mui/system';
import Image from 'next/image';
import NavBar from '../../../components/NavBar';

import SudokuBoard from '../components/sudoku';
import { CssBaseline } from '@mui/material';


export default function Sudoku() {

  return (<>
    <NavBar currentPage='Sudoku'/>
 
    <Container
    maxWidth={false}
    className="bg-emerald-200 h-screen"
      >
    <Container 
      maxWidth="sm">
      

      <SudokuBoard />

      {/* <Image src={'/Completed_Board.png'} alt={'Compelted Sudoku Board'} width="500" height="500" /> */}
    </Container>
    </Container>
  </>
  );
}
