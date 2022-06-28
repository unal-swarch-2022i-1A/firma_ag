class UserResponse {
    userId;
    email;
    firstName;
    lastName;
    password;
    constructor(userId, firstName, lastName, email, password){ 
        this.userId = userId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}

exports.default = UserResponse;