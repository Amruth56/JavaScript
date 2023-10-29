// singleton

// object literals

const jsuser = {
    name : "Amruth",
    "full name": "Amruth Mandappa T S",
    age: 21,
    roll: "20bcs013",
    email: "qwert@gmail.com",
    timeline: [1,2,3,4]
}

console.log(jsuser.name)
console.log(jsuser["full name"])

// to put a "Symbol" inside an object the correct syntex id to 1st define the symbol and then define it inside an object
const mysym = Symbol("key1")
const jsUser1 = {
    [mysym] : "jbcj",
    mysym:"dwcbhj"
}
console.log(jsUser1[mysym])
console.log(jsUser1.mysym)