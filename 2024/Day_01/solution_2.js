/*
Day 1 Puzzle-2 solution


*/

function sol2(x){

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

  let total = 0 // summ of the differences
  let multi = 0

  for(let i = 0; i < lArr.length; i++){ // checking the occurences of the current index in the adjacent
    for(let j = 0; j < rArr.length; j++){
      if(lArr[i] == rArr[j]){ // incrementing the occurences to multiply on the current index
        multi++
      }
      lArr[i] *= multi
    }
  }

  for(let el of lArr){ // adding the elements in the left array to a total
    total += el
  }

  return total
}

const fs = require('fs')

const input = fs.readFileSync('./input.txt').toString()

console.log(input) // testing input

let ans = input.split('\n')

// console.log(sol2(ans)) //solution