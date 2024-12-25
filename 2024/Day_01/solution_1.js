/*
Day 1 Puzzle-1 solution


*/

function listDiff(x){

  for(let e of x){ // Splitting the elements of the input to accuire the two numbers
    e.split('   ')
  }

  let lArr = [] // left Array
  let rArr = [] // Right Array

  for(let i = 0; i < x.length; i++){ // Inserting the numbers into the appropriate array side
    for(let j = 0; j < x[i].length; j++){
      if(j == 0){
      lArr.push(x[i][j])
      }else(rArr.push(x[i][j]))
    }
  }

  for(let i = 0; i < lArr.length; i++){ // converting the strings into numbers
    Number(lArr[i])
    Number(rArr[i])
  }

  console.log(lArr) //test
  console.log(rArr) //test

  lArr.sort() // ordering the numbers in the new array
  rArr.sort()

  console.log(lArr) //test
  console.log(rArr) //test

  let total = 0 // summ of the differences
  let diff = 0

  for(let i = 0; i < lArr.length; i++){ // comparing the two equivalent indexes based on size

    diff = Math.abs(lArr[i] - rArr[i])
    console.log(lArr[i]) //test
    console.log(rArr[i]) //test
    //console.log(diff) //test
    total += diff
  }

  return total
}

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

let ans = input.split('\n')

console.log(listDiff(ans)) //solution