//reduce method in js 

const num = [1,2,3,4,5]

// const myTotal = num.reduce( (acc, cur) => {console.log(`accumulator: ${acc} + currentValue: ${cur} = ${acc+cur}`); return acc + cur}, 10 )

// console.log(myTotal)

// const myTotal = num.reduce( function(acc, cur) {
//     console.log(`accumulator: ${acc} + currentValue: ${cur} = ${acc+cur}`);
//     return acc + cur}, 3 )

const shopping = [
    {
        course : "python",
        price : 999
    },
    {
        course : "JavaScript",
        price : 1999
    },
    {
        course : "C++",
        price : 3999
    },
    {
        course : "Java",
        price : 2599
    },
]
const cost = shopping.reduce((acc, item) => (acc + item.price), 0)
console.log(cost)