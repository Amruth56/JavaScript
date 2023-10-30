// object singleton 

const whatsappUser1 = new Object();  // singleon objct
// console.log(whatsappUser1)
// console.log(`whatsappUser1 :${whatsappUser1}`)

const whatsappUser2 = {} // non singleton objct
// console.log(whatsappUser2)
// console.log(`whatsappUser2 :${whatsappUser2}`)

whatsappUser1.id = "123abc"
whatsappUser1.name = "Sam"
whatsappUser1.age = 39

// console.log(whatsappUser1)

const instaUser= {
    name:{
        userID:{
            firstname : "Gusto",
            middlename: "stud",
            lastname: "muffin"
        },
        fullname:{
            firstname : "Amruth",
            middlename: "Mandappa",
            lastname: "T S"
        }

    },
    age:21
}
// console.log("instaUdser :", instaUser)
// console.log("instaUser.name :",instaUser.name)
// console.log("instaUser.name.fullname :",instaUser.name.fullname)
// console.log("instaUser.name.fullname.lastname :",instaUser.name.fullname.lastname)
// console.log("instaUser.name.userID :",instaUser.name.userID, "\n")
// console.log(`nested objects :${instaUser.name}`)

const obj1  = {
    name : "qwe", id: 123
}
const obj2 = {
    name : "asd", id : 543
}
//to concatinate two or more objects 
const obj3 = Object.assign(obj1, obj2)
// console.log(`using 'assign' operator to concatinate two or more objects :`, obj3)
// console.log(obj3 === obj1)
const obj4 = {...obj1, ...obj2}
// console.log(obj4)

console.log(Object.keys(whatsappUser1)) // retruned data type is in array
console.log(Object.values(whatsappUser1)) // retruned data type is in array
console.log(Object.entries(whatsappUser1)) // retruned data type is in array inside an array
console.log(Object.hasOwnProperty('name2')) // to check if the specified property is used or not 