/*
Day 1 Puzzle-2 solution


*/

function sol2(x){

  for(let e of x){
    e.split('   ')
  }

  let lArr = []
  let rArr = []

  for(let i = 0; i < x.length; i++){
    for(let j = 0; j < x[i].length; j++){
      if(j == 0){
      lArr = lArr.push(x[i][j])
      }else(rArr = rArr.push(x[i][j]))
    }
  }

  for(let i = 0; i < lArr.length; i++){
    Number(lArr[i])
    Number(rArr[i])
  }

  let total = 0
  let multi = 0

  for(let i = 0; i < lArr.length; i++){
    for(let j = o; j < rArr.length; j++){
      if(lArr[i] == rArr[j]){
        multi++
      }
      lArr[i] = lArr[i] * multi
    }
  }

  for(let el of lArr){
    total += el
  }

  return total
}

let input = ""

let ans = input.split('\n')

console.log(sol2(ans)) //solution