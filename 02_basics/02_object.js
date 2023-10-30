
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
console.log(`type of [mysym] : ${typeof jsUser1[mysym]}` )
console.log(jsUser1.mysym)
console.log(`type of [mysym] : ${typeof jsUser1.mysym} \n` )


// we can rewrite the values
jsuser.email = "wdfgbnkiuy@gmail.com"
console.log(jsuser["email"])
// we can freez the object from getting further changes 
// Object.freeze(jsuser)
jsuser.email = "updatedMail@gmail.com"
console.log(jsuser)
console.log(`\n`)
console.log(jsUser1)
console.log(`\n`)

jsuser.greetings = function()
{
    console.log("hello everyone")
}
console.log(jsuser.greetings) // function (anonymous)
console.log(jsuser.greetings())

jsuser.greeting = function()
{
    console.log(`hello , ${this.name}`)
}
console.log(jsuser.greeting())