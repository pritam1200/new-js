const accountId = 144553
let accountEmail ="pritam123@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"

let accountState;

// accountId =2 not allowed

accountEmail = "pritam321@google.com"

accountPassword=212121
accountCity= "jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])