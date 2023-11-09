// const usermail = "something@gmail.com"
const usermail =""
// const usermail =" "
// const usermail = []
// empty array = true 
// empty string = false 

if(usermail)
{
    console.log("usermail received");
}
else{
    console.log("usermail is reqired");
}


// FALSY VALUES = false, 0 , -0, "", BigInt 0n, null, undefined, NaN 
// TRUTHLY VALUES = "0", "false", " ", function(){}, [], {}, bvalues inside a string gives us a truthly values

const emptyobj = {}

if(Object.keys(emptyobj).length === 0)
{
    console.log(`object is empty`)
}