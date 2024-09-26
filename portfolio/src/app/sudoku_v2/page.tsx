'use client'

import Box from '@mui/material/Box';
import { Button, Grid2, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';

//I want a 3x3 grid of 3x3 squares
//I want to be able to enter a number into each of the squares
//some squares are pre-populated
//I want a submit button which validates the game is done


export default function Home() {
  // let sudoku = [[0,0,4,0,5,0,9,7,3],[2,0,7,4,6,0,0,0,0],[8,3,0,1,0,0,4,0,0],[0,0,0,0,8,0,0,0,6],[0,2,6,5,7,1,0,4,0],[0,1,3,0,0,0,2,5,0],[8,9,0,4,0,0,6,0,5],[0,0,2,0,1,8,0,0,4],[0,0,7,5,6,0,0,0,1]]
  // let initial_sudoku = [[0,0,4,0,5,0,9,7,3],[2,0,7,4,6,0,0,0,0],[8,3,0,1,0,0,4,0,0],[0,0,0,0,8,0,0,0,6],[0,2,6,5,7,1,0,4,0],[0,1,3,0,0,0,2,5,0],[8,9,0,4,0,0,6,0,5],[0,0,2,0,1,8,0,0,4],[0,0,7,5,6,0,0,0,1]]
  let initial_sudoku = [0,0,4,0,5,0,9,7,3, //row1
                        2,0,7,4,6,0,0,0,0, //row2
                        8,3,0,1,0,0,4,0,0, //row3
                        0,0,0,0,8,0,0,0,6, //row4
                        0,2,6,5,7,1,0,4,0, //row5
                        0,1,3,0,0,0,2,5,0, //row6
                        8,9,0,4,0,0,6,0,5, //row7
                        0,0,2,0,1,8,0,0,4, //row8
                        0,0,7,5,6,0,0,0,1] //row9
  
  let [sudoku,setSudoku] = useState<number[]>(initial_sudoku);
  

  

  const handleChange = (index: number) => e => {
    const value = e.target.value;

    let row = Math.floor(index / 9)
    let column = index % 9

    const nextSudoku = sudoku.map((grid,indexi_new) => {
      if (indexi_new !== indexi){
        return grid;
      }
      return grid.map((item,indexj_new)=>{
       
        if(indexj === indexj_new){
          return Number(e.target.value);
        }
        return item;
        
      })
    })
    setSudoku(nextSudoku)
  }

  const checkArray = (sum: number, i: number ): boolean => {
    console.log("sum: ",sum, ", i: ", i)
    if (sum != 45){
      console.log("Invalid submission - sum")
      return false;
    }
    let arrSet: Set<number> = new Set(sudoku[i])
    console.log(arrSet.size)
    if(arrSet.size < 9){
      console.log("Invalid submission")
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    console.log('Submit')
  //   // //Check that all 3x3 grids are correct
  //   // for(var i = 0; i < sudoku.length; i++){
  //   //   console.log(i,", ",sudoku[i])
  //   //   const sum: number = sudoku[i].reduce(
  //   //     (accumulator: number, currentValue:number) => accumulator + currentValue,
  //   //   );

  //   //   if(!checkArray(sum,i)){
  //   //     return;
  //   //   }
  //   // }


  //   //Check that each row is correct
  //     //For each grid, of index i = 0, 3, 6 we need to check that rows with starting index j = 0, 3, 6 are correct
  //       //so to check from 0 to the 9th index of the row, we need to look at other grids
  //         // i = 0 to 2, j = 0 to 2
  //         // for i in range (0,2){

  //        // }
  //     //Loop through grids 0, 3, 6
  //     for(var i = 0; i < sudoku.length; i=i+3){
  //       console.log(i,", ",sudoku[i], "2")
  //       //Loop through each row
  //       for(var j = 0; j < sudoku[i].length; j=j+3){
  //         console.log(j,", ",sudoku[i][j])
  //         //Loop along that row
  //         for(var k = j; k < sudoku[i].length; ){
            
  //         }
  //       }
  //       const sum: number = sudoku[i].reduce(
  //         (accumulator: number, currentValue:number) => accumulator + currentValue,
  //       );

  //       if(!checkArray(sum,i)){
  //         return;
  //       }
  //     }
  //   //Check that each column is correct
  }

  const renderGrid = (value: number, index: number) => {
    let row_start: number = Math.floor(index / 9)
    let column: number = index % 9
      return (
        <TextField 
          onChange={handleChange(index)} 
          key={index} 
          value={value === 0 ? '' : value} 
          size='small' 
          disabled={initial_sudoku[index] != 0} 
          className="size-10"/>
      );
  
  }
  
  return (<>
  <Container maxWidth="sm">
    <p className="text-3xl justify-center">Sudoku</p>

      <Box className="grid grid-cols-9 grid-rows-9">
        {sudoku.map((value,index) => (
            renderGrid(value,index)
            
        ))}
      </Box>
      <Box className="w-full flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
      
      </Container>
  </>
  );
}
