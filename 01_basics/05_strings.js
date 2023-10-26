const name = " Amruth"
const reopCnt = 20
const newName = "Hitesh"

console.log(`hello my name is ${name} having a total of ${reopCnt} repositories `)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(3));
console.log(name.indexOf('r'))

const newString = name.substring(0,3)
console.log(`new string is ${newString}`)

const anotherString = newName.slice(-4, -1)
console.log(`after using tehy slice keyword the new sting is ${anotherString}`)


const newStringOne = "     Amruth Mandappa      "
console.log(newStringOne)
console.log(newStringOne.trim())

console.log(name.replace("Amruth", "Mandappa"))


console.log(`new string includes 'pap' :${newStringOne.includes("pap")}`)