const arr1 = [1,2,3, "hello"]
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
console.log(`using 'includes' operation to check if 9 is present in the array or not :${arr2.includes(9)}`)