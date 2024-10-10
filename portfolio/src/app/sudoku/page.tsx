'use client'

import { Container } from '@mui/system';
import Image from 'next/image';
import NavBar from '../../../components/NavBar';

import PopUp from '../components/PopUp';
import SudokuBoard from '../components/SudokuBoard';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useState, useEffect } from 'react';
import StopWatch from '../components/StopWatch';

export default function Sudoku() {

  let [result, setResult] = useState(false);
  
  const { width, height } = useWindowSize()

  return (<>
    <NavBar currentPage='Sudoku' />

    <Container
      maxWidth={false}
      className="bg-emerald-200 h-screen flex p-5"
    >
      
      
      <Container
        maxWidth="sm">
         
        <PopUp open={result} setOpen={setResult} title={'Congratulations'} content={'Well done on completing the sudoku!'} />

        {result ? <Confetti width={width} height={height} /> : ""}
        
        <SudokuBoard result={result} setResult={setResult} />

        {/* <Image src={'/Completed_Board.png'} alt={'Compelted Sudoku Board'} width="500" height="500" /> */}
      </Container>
    </Container>
  </>
  );
}
