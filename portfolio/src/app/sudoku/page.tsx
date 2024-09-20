'use client'

import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, Grid2, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

//I want a 3x3 grid of 3x3 squares
//I want to be able to enter a number into each of the squares
//some squares are pre-populated
//I want a submit button which validates the game is done


export default function Home() {
  // let sudoku = [[0,0,4,0,5,0,9,7,3],[2,0,7,4,6,0,0,0,0],[8,3,0,1,0,0,4,0,0],[0,0,0,0,8,0,0,0,6],[0,2,6,5,7,1,0,4,0],[0,1,3,0,0,0,2,5,0],[8,9,0,4,0,0,6,0,5],[0,0,2,0,1,8,0,0,4],[0,0,7,5,6,0,0,0,1]]
  let [sudoku,setSudoku] = useState([[0,0,4,0,5,0,9,7,3],[2,0,7,4,6,0,0,0,0],[8,3,0,1,0,0,4,0,0],[0,0,0,0,8,0,0,0,6],[0,2,6,5,7,1,0,4,0],[0,1,3,0,0,0,2,5,0],[8,9,0,4,0,0,6,0,5],[0,0,2,0,1,8,0,0,4],[0,0,7,5,6,0,0,0,1]]);
  


  const handleChange = (event) => {
    setSudoku(event.target.value)
  }
  
  return (<>
  <Container maxWidth="sm">
    <p className="text-3xl justify-center">Sudoku</p>

      <Box className="grid grid-cols-3 grid-rows-3">
        {sudoku.map((i,indexi) => (
            <div key={indexi} className="grid grid-cols-3 grid-rows-3 p-2">
              {i.map((j,indexj) => (
                <TextField onChange={handleChange} key={indexi+","+indexj} value={j === 0 ? '' : j} size='small' disabled={j != 0} className="size-10"/>
              ))}
            </div>
        ))}
      </Box>
      <Box className="w-full flex justify-end">
        <Button>Submit</Button>
      </Box>
      
      </Container>
  </>
  );
}
