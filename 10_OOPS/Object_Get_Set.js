const User = {
    _email: 'user@example.com',
    _password: '25963',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const user = Object.create(User);
console.log(user.email);