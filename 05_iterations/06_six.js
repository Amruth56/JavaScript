const prog = ["JavaScript", "C++", "C", "Python", "Java"]
//for each does not return any value 
 const store = prog.forEach( (key) => {
    // console.log(key)
} )
 const stores = prog.forEach( (key) => {
    // return key
} )

// console.log(store)
// console.log("\n")
// console.log(stores)

const num = [1,2,3,4,5,6,7,8,9,10]

const newNum1 = num.filter( (num) => (num > 5))
// console.log(newNum1)

const newNum2 = num.filter( (num) => {
    num > 4                             // retrn keyord is a must if we re definig it inside a scope 
})
// console.log(newNum2)

const newNum3 = num.filter( (num) =>{
    return num > 4
})
// console.log(newNum3)

num.forEach( (x) => {
    if (x>4) {
        // console.log(`${x} is greater than 4`)
    }
    else{
        // console.log(`${x} is lesser than 4`)
    }
})


const books = [
    {
        bookname : "book1", authorname : "author1", bookprice : "100"
    },
    {
        bookname : "book2", authorname : "author2", bookprice : "150"
    },
    {
        bookname : "book3", authorname : "author3", bookprice : "199"
    },
    {
        bookname : "book4", authorname : "author4", bookprice : "100"
    },
    {
        bookname : "book5", authorname : "author5", bookprice : "127"
    }
]

const userBooks = books.filter ( (x) => x.bookprice >= 150)

console.log(userBooks)