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
console.log(`${loggedIn()}`)