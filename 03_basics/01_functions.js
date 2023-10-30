function addTwoNumbers (num1, num2) {
    console.log(num1+num2)
}

addTwoNumbers(4,5)

function add(num1, num2){
    return num1+num2
    console.log("iurgf") // after return statement, comsole.log wont be executed 
}
const result = add(3,4)
console.log(result)


function loggedIn(user)
{
    if(user === undefined)
    {
        console.log('its retruns undefined as the user name is not defined');
        return 
    }
        return `${user}, just logged in `
}
// console.log(loggedIn("Amruth"))
console.log(`${loggedIn()}\n`)


function calculateCartPrize(...num1) /// (...) is used as a spread operator 
{
    return num1;
}
console.log(calculateCartPrize(5,4,6,32,1))

function play (val1, val2, ... num1)
{
    console.log(`val1 :${val1}, val2 :${val2}, num1 :${num1}`)
}
play(1,2,3,4,5,6,7,8,9) 


const user = {
    username : "Amruth",
    age : 21
}

function objectWithFunction(anyObject)
{
    console.log(`username is ${anyObject.username}, age is ${anyObject.age}, passcode is ${anyObject.passcode}\n`)
}
objectWithFunction(user)

function objectWithFunction2(anyObject)
{
    console.log(`username is ${anyObject.username}, age is ${anyObject.age}, passcode is ${anyObject.passcode}\n`)
}
objectWithFunction2({
    username: "aske2hf",
    age: 132,
    passcode: "34df6"
})

const newArr = [1,2,4,5,6,7,4,,32,2]
function retrunSecondValue(getarr)
{
    console.log(`value at 2nd index :${getarr[2]}\n`)
}
retrunSecondValue(newArr)