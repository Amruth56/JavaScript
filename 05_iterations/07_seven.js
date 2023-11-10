const num = [1,2,3,4,5,6,7,8,9,10]

const newNum = num.map((num) => num+10)
// console.log(newNum)


//chaining 
const newNum2 = num.map((num) => num*10).map((num) => num*2).filter((num) => num>90)
console.log(newNum2)