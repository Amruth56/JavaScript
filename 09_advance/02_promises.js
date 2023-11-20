/* 
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

A Promise is an object representing the eventual completion or failure of
an asynchronous operation. Since most people are consumers of already
created promises, this guide will explain consumption of returned
promises before explaining how to create them.

 */


                                                            //to consume a promise 
// fetch('https://somethiing').then().catch().finally()
            // the response comes in .then()
            // the error comes in .catch()
            // everything comes in .finally()


/*
const promiseOne = new Promise(function(resolve, reject){
    do an Async task like, calling a DataBase, cryptography, network calls
})
*/
//resolve is directly connected with .then()
//reject is directly connected with .catch()
//finally will execute always even its resolve or reject




//                                      creating a promise 
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task is complete")
//     }, 1000)
// })

// //                   consuming the promise 
// promiseOne.then(function(){
//     console.log("promise consumed")
// })






//                                   to connect resolve to .then 
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         // resolve()
//         console.log("Async task is complete")
//         resolve()
//     }, 1000)
// })

// //                    consuming the promise 
// promiseOne.then(function(){
//     console.log("promise consumed")
// })





// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     }, 1000)
// }). then(function(){
//     console.log("Second promisehas been called")
// })





// //                                      to pass the data received from the network
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve({username : "You", email: "Tube@youtube.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })





                                 
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username : "Java", email : "Script@javaScript.com"})
//         }   else    {
//                 reject("error 123")
//         }
//     }, 1000)
// })

// //                                      chaining, useful to connect databases 
// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{console.log("finally executed")})





//                                      async syntex to consume the promise 
const promiseFive = new Promise((resolve, reject) => {
        setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "JavaScript", email : "Script@javaScript.com"})
        }   else    {
                reject("error 123456")
        }
    }, 1000)
})

                         // saync await = waits for the job to be done, and if the job id not done it will throw us an error 
async function consumePromiseFive(){
                         // we can use await whenever there is a async keyword 

    try{
     const response = await promiseFive
     console.log(response);
    }
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
