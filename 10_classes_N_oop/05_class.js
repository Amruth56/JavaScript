class user {
    constructor(username, email, password)
    {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user('user1', 'user1@user.com', 123)
console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUserName())





//                                      behind the scene
function myUser(username, email, password)
{
    this.username = username
    this.email = email
    this.password = password
}

myUser.prototype.encryptPassword = function (){
    return `${this.password}abc`
}
user.prototype.changeUserName = function (){
    return `${this.username.toLowerCase()}abc`
}
const user2 = new user('UseR2', 'user2@user.com', 456)
console.log(user2)
console.log(user2.encryptPassword())
console.log(user2.changeUserName())