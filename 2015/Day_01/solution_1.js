/*
Day 1 Puzzle solution


*/

const floorNum = (x) => {

  let num = 0

  for (let n of x) {
    if(n === "("){
      num++
    }else if(n === ")"){
      num--
    }
  }

  return num
}

console.log(floorNum([")",")",")","(","(",")"])) //Test Input