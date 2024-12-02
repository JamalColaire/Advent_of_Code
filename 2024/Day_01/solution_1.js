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

  lArr.sort() // ordering the numbers in the new array
  rArr.sort()

  let total = 0 // summ of the differences
  let diff = 0

  for(let i = 0; i < lArr.length; i++){ // comparing the two equivalent indexes based on size
    if(lArr[i] > rArr[i]){
      diff = lArr[i] - rArr[i]
    }else if(rArr[i] > lArr[i]){
      diff = rArr[i] - lArr[i]
    }
    total += diff
  }

  return total
}

let input = "3   4"


let ans = input.split('\n')

console.log(listDiff(ans)) //solution