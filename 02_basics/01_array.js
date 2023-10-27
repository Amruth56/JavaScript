const arr1 = [0,1,2,3,4,5,6,7, "hello"]
console.log(typeof arr1)
console.log(arr1[0])

const arr2 = new Array(1,2,3,4)
console.log(typeof arr2)
console.log(arr2[0])
arr2.push("Amruth")
arr2.push(17)
arr2.push(11)
console.log(arr2)
arr2.pop()
console.log(arr2)
arr2.unshift(12)
console.log(`using unshift operation : ${arr2}`)

console.log(`using shift operation : ${arr2.shift()}`)
console.log(`array after shiuft operation ${arr2}`)
console.log(`using 'includes' operation to check if 9 is present in the array or not :${arr2.includes(9)}\n`)


// 
console.log(` ${arr1}`)
console.log(`use of 'slice' operation from 1,7 :${arr1.slice(1,7)}`)
console.log(`use of 'splice' operation from 1,7 :${arr1.splice(1,7)}`)
console.log(`slice opeartion does not include the last element where as splice opeartion includes the last operation`)


// 
console.log(`\n`)
const num = [1,2,3,4,5]
const alpha = ['a', 'b', 'c', 'd', 'e']

const alphaNum1 = num.push(alpha)
console.log(`using push : ${alphaNum1}`)
console.log(`using push : ${num.push(alpha)}\n`)

const alphaNum2 = num.concat(alpha)
console.log(`using 'concat' : ${alphaNum2}`)
console.log(`using 'concat' : ${num.concat(alpha)}\n`)

const anotherArr = [1,2,3,[4,5,6],2,[1,2,[3,4,5]], 8]
console.log(`anotherArr :${anotherArr}`)
const arr3 = anotherArr.flat(Infinity)
console.log(`using 'flat' opeartion on anotherArr :${arr3}\n`)

console.log(`using 'from' operation :${Array.from("Amruth")} `)
console.log(`using 'from' operation :${Array.isArray("Amruth")} `)

const score1 = 100
const score2 = 200
const score3 = 300

console.log(`using 'of' operation :${Array.of(score1, score3, score2)}`)