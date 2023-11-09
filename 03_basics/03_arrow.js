const user = {
    username : "Amruth",
    age : 21,

    welcomeMessage : function (){
        console.log(`${this.username}, welcome`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "qwert"
// user.welcomeMessage()

// console.log(this)

function zoro()
{
    console.log(this)
}
// zoro()
function sanji()
{
    const username = " sanji"
    console.log(this.username)
}
// sanji() // gives undefined as "this" keyword works mainly on objects trather than functions 

const nami = () => {
    const username = "Nami"
    console.log(this.username)
}
// nami()

//basic arrow function (explicit)
const addtwo = (num1, num2) => {
    console.log(num1+num2)
}
// addtwo(2, 3)


// arrow function using implicit return 
// const addthree = (num1, num2, num3) => num1+num2+num3;
const addthree = (num1, num2, num3) => (num1+num2+num3)
// console.log(addthree(1,2,3))

const checkobject = (num1, num2) => ({username: "xyz"})
console.log(checkobject(1,2))
// ({username: "xyz"}) = { username: 'xyz' }
// { username: 'xyz' } = undefined
// (username: "xyz") = SyntaxError
