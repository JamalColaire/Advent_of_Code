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

    let side1 = arr[0]*arr[1] //lxw
    let side2 = arr[1]*arr[2] //wxh
    let side3 = arr[2]*arr[0] //hxl
    
    let smallSide = 0 //smallest side

    if(side1 < side2 && side3){
      smallSide = side1
    }else if(side2 < side1 && side3){
      smallSide = side2
    }else if(side3 < side1 && side2){
      smallSide = side3
    }

    total += ((arr[0]*arr[1]*2) + (arr[1]*arr[2]*2) + (arr[2]*arr[0]*2) + smallSide) // squareroot formula (2xlxw + 2xwxh + 2xhxl) + area of smallest side
  }

  return total 
}

let input = "1x1x10" // sample input

let ans = input.split(' ') // splitting the input by spaces and returning an array

console.log(squareFt(ans)) //solution