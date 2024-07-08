function SetUserName(userName) {
    this.userName = userName;
    console.log("Function called!");
}

function createUser(userName, email, password) {
    SetUserName.call(this, userName);

    this.email = email;
    this.password = password;
}

const boby = new createUser("Boby", "boby@example.com", "1023");
console.log(boby);