// primitive (7 types) : string, numeber, boolean, null, undefined, symbol, bigint
// non-promitive (refernce) : array, objects and functions 

let x = 2;
let y = 'hello'

/*
number 
bigint
string 
boolean
null  == standalone value
undefined 
symbol == unique 
object
*/

console.log(typeof(x))
console.log(typeof "Amruth")
console.log(typeof null)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log("id === anotherId :", id === anotherId)

//bigInt
const largeNumber = 2321334555n
console.log('type of large number :',typeof(largeNumber))

//Objets

let myObj = {
    name: 'Amruth',
    age: 21
}
console.log(myObj);

// function
const myFun = function() {
    console.log("my Function ")
}
console.log(myFun) 

// ==================================================================================
// memories 2 types = stack(primitive) and heap(non-primitive)