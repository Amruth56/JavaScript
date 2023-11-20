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
//resolve is directly connected with then 




//                                      creating a promise 
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task is complete")
//     }, 1000)
// })
// // consuming the promise 
// promiseOne.then(function(){
//     console.log("promise consumed")
// })






//                                   to connect resolve to .then 
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        // resolve()
        console.log("Async task is complete")
        resolve()
    }, 1000)
})
// consuming the promise 
promiseOne.then(function(){
    console.log("promise consumed")
})





new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}). then(function(){
    console.log("Second promisehas been called")
})






const promiseThree = new Promise(function(resolve, reject){
    setTimeout(funcion() {

    }, 1000)
})