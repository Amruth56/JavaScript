// for of loop
// for (const iterator of object) {  }

const arr = [1,2,3,4, 5]
for (const num of arr) {
    // console.log(arr[num]); // tries to access the number at that index 
}
console.log("\n")

for (const num of arr) {
    // console.log(num); // return s the number
}

const greet = "greetings "
for (const cbt of greet) {
    // console.log(cbt)
}

//maps // no duplicates, ordered
const mp = new Map();
mp.set("key", "value")
mp.set("IN", "India")
mp.set(1,11);
mp.set(1,11);
// console.log(mp)

for (const [key, val] of mp) {
    // console.log(`${key}   =  ${val}`)
}

const myobj ={
    "val1" : "val2",
    1 : 2,
    "hello" : 4
}
for (const [x , y] of myobj) {
    // console.log( x , y)             object is not iteratable
}
