/*
Day 1 Puzzle-2 solution


*/

const floorNum = (x) => {

  let num = 0 // floor number
  let inputArr = x.split('') // used split to return the string as an arry
  

  for (let i = 0; i < inputArr.length; i++) { // iterates through the array and increments the floor number based on the symbol
    inputArr[i] == "(" ? num++ : num--

    if(num === -1){ // returns the first position when the basement is entered
      return i + 1
    }
  }

}

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

console.log(floorNum(input))  // solution