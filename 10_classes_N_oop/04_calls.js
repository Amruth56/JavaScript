function setUserName (username){
    //complex DB calls 
    this.username = username
    console.log('called')
}

function createUser(username, email, password)
{
    // setUserName (username)
    setUserName.call(this, username)
    this.email = email
    this.password =  password
}

const user = new createUser("user1", 'createUser@user1.com', 1234)
console.log(user)