const user = {
    _email : 'skjcn@gmail.com',
    _password : '12elewnc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(`tea._email: ${tea._email}`)
console.log(`tea.email: ${tea.email}`)