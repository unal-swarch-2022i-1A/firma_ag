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