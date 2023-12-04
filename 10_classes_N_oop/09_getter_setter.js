class user {
    constructor(email, password)
    {
        this.email = email
        this.password = password
    }

        get password()
        {
            // return this._password.toUpperCase()
            return `${this._password}kd[dwc]`
        }
        set password(value)
        {
            this._password = value.toUpperCase()
        }
    
}

const amruth = new user("amruth@gmail.com", "123sdkljch4")
console.log(amruth.email)
console.log(amruth.password)