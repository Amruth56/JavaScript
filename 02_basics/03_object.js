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
console.log(`using 'assign' operator to concatinate two or more objects :`, obj3)
console.log(obj3 === obj1)