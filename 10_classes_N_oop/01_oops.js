//                                      object literals 
const user = {
     username : "Amruth",
     passcode : 1234,
     loginCount : 10,
     signedIn : true,

     getUserDetails : function()
     {
      //   console.log("got user details")
     //  console.log(`username is : ${this.username}`) // this is necessary 
     //  console.log(this)
     }
}

// console.log(user.getUserDetails)
// console.log(user.getUserDetails())

// console.log(this)                       // prints window object which is a global object 







function myUser(username, logInCount, signIn)
{
     this.username = username;
     this.logInCount = logInCount;
     this.signIn = signIn

     function greetings()
     {
          // console.log(`welcome ${this.username}`)
     }
     return this
}
// const userOne = myUser("Amruth", 56, true)
// const userTwo = myUser("Mandappa", 17, true) // here it overwrites userOne value 
// console.log(userOne)




//                                                we can stop the value from getting overwritten by using new keyword 

// step : 1                    an empty object is created as soon as we use new keyword and its called as instance
// step : 2                    constructor function is called when we use new keyword, arguments are packed inside and returns us these packed arguments 
// step : 3                    this keyword(arguments) gets injected inside this 
// step : 4                    we will get it inside the function 
const userOne = new myUser("amruth", 56, true)
const userTwo = new myUser("Mandappa", 17, true)
// console.log(userOne)
// console.log(userTwo)
console.log(userOne.constructor)             //self reference
