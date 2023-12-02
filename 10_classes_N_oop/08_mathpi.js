const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

const chai = {
    name :'ginger Chai',
    price : 250,
    isAvaliable : true,
    orderChai : ()=>{console.log("coffee hea")}
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,                   //loop
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
chai.name = 'hello'
chai.price = 40
console.log(chai)


// for(let [key, value] of chai){               //not iteratable
for(let [key, value] of Object.entries(chai)){

    if(typeof value !== 'function')
    {
        console.log(`${key} : ${value}`)
    } else{
        console.log('coffee ban raha hea')
    }
}