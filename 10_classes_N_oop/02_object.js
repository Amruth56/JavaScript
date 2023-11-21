function multiply(num)
{
    return num*5
}

multiply.power = 5

console.log(multiply(2))
console.log(multiply.power)
console.log(multiply.prototype)

function createUser (username, price)
{
    this.username = username 
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}


const tea = new createUser("tea", 15)
const coffee = new createUser("coffee", 20)

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}

coffee.printMe()