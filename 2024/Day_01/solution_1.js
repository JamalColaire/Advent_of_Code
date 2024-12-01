/*
Day 1 Puzzle-1 solution


*/

function listDiff(x){

  let lArr = []
  let rArr = []
  
  for(let e of x){
    e.split('   ')
  }

  for(let i = 0; i < x.length; i++){
    for(let j = 0; j < x[i].length; j++){
      if(j == 0){
      lArr = lArr.push(x[i][j])
      }else(rArr = rArr.push(x[i][j]))
    }
  }

  lArr.sort()
  rArr.sort()

  let total = 0

  for(let i = 0; i < lArr.length; i++){
    if(lArr[i] > rArr[i]){
      let diff = lArr[i] - rArr[i]
    }else if(rArr[i] > lArr[i]){
      let diff = rArr[i] - lArr[i]
    }
    total += diff
  }

  return total
}

let input = "3   4
4   3
2   5
1   3
3   9
3   3";

let ans = input.split('\n')

console.log(listDiff(ans)) //solution