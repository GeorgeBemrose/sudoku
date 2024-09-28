'use client'

import Box from '@mui/material/Box';
import { Button, Grid2, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import SudokuBoard from '../components/sudoku';

export default function Sudoku() {

  return (<>
    <Container maxWidth="sm">
      <p className="text-3xl justify-center">Sudoku</p>
      <SudokuBoard />
      
      <Image src={'/Completed_Board.png'} alt={'Compelted Sudoku Board'} width="500" height="500" />
    </Container>
  </>
  );
}
