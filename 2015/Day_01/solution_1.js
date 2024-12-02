/*
Day 1 Puzzle-1 solution


*/

const floorNum = (x) => {

  let num = 0 //floor number

  for (let n of x) { // iterates through the array and increments the floor number based on the symbol
    n == "(" ? num++ : num-- 
  }

  return num 
}

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

const ans = input.split('') // split by the split input and returned as an array

console.log(floorNum(ans)) // solution