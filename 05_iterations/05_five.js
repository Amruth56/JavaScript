//for each loop

const arr = [1, 2, 3, 4, "a", "b", "c", "abc"]

arr.forEach (function (x) {
    // console.log(x)
})

arr.forEach((y) => {
    // console.log(y)
})

function printme(d)
{
    // console.log(d)
}

arr.forEach(printme)

arr.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

const prog = [ 
    {
        language : "JavaScript",
        fileName : "js"
    },
    {
        language : "C plus plus",
        fileName : "cpp"
    },
    {
        language : "python",
        fileName : "py"
    }
]

prog.forEach( (x) => {
    console.log((x.fileName))
})
prog.forEach( (x) => {
    console.log((x))
})