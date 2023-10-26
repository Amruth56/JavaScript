const score = 400
console.log(`score length ${score.length}`)
console.log(score)
const typ = typeof(score)
console.log(`type of ${typ}`)

//new object
const balance = new Number(100)
console.log(balance)
console.log(`type of ${typeof balance}`)


console.log(score.toString())
console.log(typeof score)
console.log(`score length :${score.toString().length}`) 

console.log(`toFixed function it helps to fix the number of decimal numbers: ${score.toFixed(3)}`)
const otherNum = 12.123456789
console.log(otherNum.toFixed(2))
console.log(otherNum.toPrecision(3))

// ===============================================================================================
console.log(Math)
console.log(`use of absolute function on (-4) is ${Math.abs(-4)}`)
console.log(`use of round function on 3.4 :${Math.round(3.4)}, on 3.6: ${Math.round(3.6)}, on 5.4 :${Math.round(5.4)}, on 5.6: ${Math.round(5.6)}, on 5.5: ${Math.round(5.5)}`)