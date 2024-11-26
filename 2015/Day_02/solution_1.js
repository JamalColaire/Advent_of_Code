/*
Day 2 Puzzle-1 solution


*/

function squareFt(x){
  let total = 0 // total combination of all the squareroots in the input

  for(i = 0; i < x.length; i++){

    let arr = x[i].split('x') // splitting the numbers in the string by x and making an array 

    for(let j of arr){ // iterating through the new array and converting the string elements into numbers
      Number(j) 
    }
    total += (arr[0]*2 + arr[1]*2 + arr[2]*2) // squareroot formula
  }

  return total 
}

let input = "4x4x4 4x4x4" // sample input

let ans = input.split(' ') // splitting the input by spaces and returning an array

console.log(squareFt(ans)) //solution