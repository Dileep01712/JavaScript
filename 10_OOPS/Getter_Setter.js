class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    };

    get email() {
        return this._email.toUpperCase();
    }

    set email(email) {
        this._email = email
    }
    get password() {
        return `${this._password}-jack`
    }

    set password(password) {
        this._password = password;
    }
}

const jack = new User("jack@example.com", "oggy");
console.log(jack.email);
console.log(jack.password);