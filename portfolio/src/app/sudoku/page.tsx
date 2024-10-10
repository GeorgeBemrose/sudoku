'use client'

import { Container } from '@mui/system';
import Image from 'next/image';
import NavBar from '../../../components/NavBar';

import PopUp from '../components/PopUp';
import SudokuBoard from '../components/SudokuBoard';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useState, useEffect } from 'react';


export default function Sudoku() {

  let [result, setResult] = useState(false);

  const { width, height } = useWindowSize()

  return (<>

    
    <Container
      maxWidth={false}
      className="bg-emerald-200 min-h-screen flex flex-col p-5 text-black"
    >
      <NavBar currentPage='Sudoku' textColor='black' />

      <Container
        maxWidth="sm"
        className="flex-grow mt-4"
        >

        <PopUp open={result} setOpen={setResult} title={'Congratulations'} content={'Well done on completing the sudoku!'} />

        {result ? <Confetti width={width} height={height} /> : ""}

        <SudokuBoard result={result} setResult={setResult} />

        {/* <Image src={'/Completed_Board.png'} alt={'Compelted Sudoku Board'} width="500" height="500" /> */}
      </Container>

    </Container>
  </>
  );
}
