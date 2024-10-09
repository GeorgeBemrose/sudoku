'use client'

import { Container } from '@mui/system';
import Image from 'next/image';
import NavBar from '../../../components/NavBar';

import SudokuBoard from '../components/sudoku';
import Confetti from 'react-confetti'


export default function Sudoku() {
  let result = true;
  return (<>
    <NavBar currentPage='Sudoku'/>
 
    <Container
    maxWidth={false}
    className="bg-emerald-200 h-screen"
      >
    <Container 
      maxWidth="sm">
      
      {result ? <Confetti width={screen} height={100}/> : ""}

      <SudokuBoard />

      {/* <Image src={'/Completed_Board.png'} alt={'Compelted Sudoku Board'} width="500" height="500" /> */}
    </Container>
    </Container>
  </>
  );
}
