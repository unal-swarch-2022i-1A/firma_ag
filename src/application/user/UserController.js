const UserService = require('../../data/user/UserService').default;
const UserMapper = require('./UserMapper');
class UserController {
    /**
     * 
     * @param {*} {id}     
     * @returns {UserResponse}
     */
    static async getUser({id}) {
        console.log("UserController: getUser ",{id});
        const userServiceResponse = await UserService.getUser(id);
        console.log("UserController: userServiceResponse ",userServiceResponse);
        return UserMapper.mapUserResponse(userServiceResponse);
    }

    static async test() {
        return "User";
    }

    /*
    TODO:
    getUser
    getUserByEmail
    createUser
    updateUser
    deleteUser
    */
}

exports.default = UserController;