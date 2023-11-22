class user{
    constructor(username)
    {
        this.username = username
    }
    logMe()
    {
        console.log(`username is ${this.username}`)
        return `username is ${this.username}`
    }
}

class teacher extends user{
    constructor(username, email, experience)
    {   
        super(username)
        this.email = email
        this.experience = experience
    }

    addCourse()
    {
        console.log(`new course was added by ${this.username}`)
    }
}

const teacher1 = new teacher('teacher1', 'teacher1@school.com', 25)     //Class constructor teacher cannot be invoked without 'new'
console.log(teacher1)
teacher1.addCourse()

const user3 = new user('user3')
// user3.addCourse()                   //user3.addCourse is not a function
user3.logMe()
console.log(user3 === teacher1)
console.log(user3 instanceof teacher)
console.log(user3 instanceof user)