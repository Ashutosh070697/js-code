const accountId = 144553
let accountEmail = "ashutoshhimanshu242@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2  // not allowed

accountEmail = "hc.hc@gmail.com"

accountPassword = "212121"

accountCity = "Bengaluru"

// console.log(accountId);

/* prefer not to use var
becouse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])