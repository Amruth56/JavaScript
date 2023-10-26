const date = new Date ()
console.log("date\t:",date)
console.log("toDateString\t:",date.toDateString())
console.log("toISOString\t:",date.toISOString())
console.log("toJSON\t:",date.toJSON())
console.log("toLocaleDateString\t:",date.toLocaleDateString())
console.log("toLocaleTimeString\t:",date.toLocaleTimeString())
console.log("toString\t:",date.toString())

console.log("\n")
// year, month, date
const newDate1 = new Date(6, 0, 2001)
console.log(`toString\t: ${newDate1.toString()}`)

const newDate2 = new Date(2001, 0, 6)
console.log(`toString\t: ${newDate2.toString()}`)

const newDate3 = new Date(2001, 6, 0)
console.log(`toString\t: ${newDate3.toString()}`)

const newDate4 = new Date("2001-01-17")
console.log(`toString\t: ${newDate4.toString()}`)


const myTimeStamp = Date.now()
console.log("\n",myTimeStamp)
console.log(newDate4.getTime())
console.log("answer in milliSeconds :",Date.now())
console.log(`answer in days ${Date.now()/1000}`)
console.log(`answer in seconds using floor value ${Math.floor(Date.now()/1000)}`)

let getDate = new Date();
console.log(`\nto get the month :${getDate.getMonth()+1}`)
