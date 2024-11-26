/*
Day 2 Puzzle-1 solution


*/
 
let l = 0 // length
let w = 0 // width
let h = 0 // height

function squareFt(x){
  for(i = 0; i < x.length; i++){

    let arr = x[i].split('x') // spliting the numbers in the string by x and making an array 

    for(let j of arr){ // iterating through the new array and converting the string elements into numbers
      Number(j) 
    }
  }

  return(arr[0]*2 +arr[1]*2 + arr[2]*2) //squareroot
}

let input = ""

let ans = input.split(' ')

console.log(squareFt(ans)) //solution