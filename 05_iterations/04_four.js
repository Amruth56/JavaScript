// forin 
// for (const key in object) { }


// object is iteratable in for in
const myobj = {
    "js" : "javascript",
    "py" : "python",
    "c++" : "c plus plus"
}

for (const key in myobj) {
    // console.log(`${key} : ${myobj[key]}` ) 
}


const arr = [1,2,3,4,5]
for (const key in arr) {
    // console.log(`${key} : ${arr[key]}`)            //it returns the value referneced 
}


const mp = new Map();
mp.set("key", "value")
mp.set("IN", "India")
mp.set(1,11);
mp.set(1,11);

for (const key in mp) {
    console.log(`${key} : ${mp[key]}`)          //map is not iteratable
}