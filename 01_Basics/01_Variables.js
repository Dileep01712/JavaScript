const accountId = 12
let accountName = "Hello"
var accountPassword = "12345"
accountCity = "New York"
let accountState;

// accountId = 2 // not allowed


accountName = "World"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountName, accountPassword, accountCity, accountState])