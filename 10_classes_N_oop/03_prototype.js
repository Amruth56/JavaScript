let myName = 'Amruth Mandappa T S     '
//  console.log(myName.length)
//  console.log(myName.truelength)
//  console.log(myName.trim().length)


let myHero = ['thor', 'spiderman']
let heroPower = {
    thor : 'hammer',
    spiderman : "web",

    getSpiderPower: function(){
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.amruth = function (){
    console.log(`Amruth is peresent in all object`)
}
Object.prototype.heyAmruth = function (){
    console.log(`Amruth says hello`)
}

// heroPower.amruth()
// myHero.amruth()
// myHero.heyAmruth()
// heroPower.amruth() // throws an error 






//                                      Inheritance 
const user = {
    name : 'user1',
    age : 21,
    email : 'user1@user1.com'
}
const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvaliable : false
}
const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user //                 old syntex


//                 modern syntex 
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = 'anotherUser1'
let oneMoreUser2 = 'oneMoreUser2'

String.prototype.trueLength = function()
{
    console.log(this)
    console.log(this.name)
    console.log(`true length is :${this.trim().length}`)
}

anotherUserName.trueLength()
oneMoreUser2.trueLength()
'amruth'.trueLength()