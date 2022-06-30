/**
 * e.g.:
 * {
 *      "userId":1,
 *      "firstName":"Korry",
 *      "lastName":"Passfield",
 *      "email":"kpassfield0@cocolog-nifty.com",
 *      "password":"mP9B1mSca"
 * }
 */
class getUserDto {
    userId;
    email;
    firstName;
    lastName;
    password;
    constructor(json) {
        Object.assign(this, json);
    }
}

exports.default = getUserDto;