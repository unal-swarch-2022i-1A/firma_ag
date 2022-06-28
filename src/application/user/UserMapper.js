const UserResponse = require('./UserResponse').default;

function mapUserResponse(userServiceResponse) {
    return new UserResponse(
        userServiceResponse.userId, 
        userServiceResponse.firstName,
        userServiceResponse.lastName,
        userServiceResponse.email,        
        userServiceResponse.password
        )
}

exports.mapUserResponse = mapUserResponse;