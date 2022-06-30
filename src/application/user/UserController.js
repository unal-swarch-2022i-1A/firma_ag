const UserService = require('../../data/user/UserService').default;
const UserMapper = require('./UserMapper');
const httpMapper = require('../http/HttpMapper');
class UserController {
    /**
     * 
     * @param {{int}} {id}     
     * @returns {UserResponse}
     */
    static async getUser({id}) {
        console.log("UserController: getUser ",{id});
        const userServiceResponse = await UserService.getUser(id);
        console.log("UserController: userServiceResponse ",userServiceResponse);
        if (userServiceResponse) 
            return UserMapper.mapUserResponse(userServiceResponse);
        else 
            return null;
    }

    /**
     * TODO
     * @param {{string}} {email} 
     * @returns 
     */
    static async getUserByEmail({email}) {
        console.log("UserController: getUserByEmail ",{email});
        const userServiceResponse = await UserService.getUserByEmail(email);
        console.log("UserController: userServiceResponse ",userServiceResponse);
        if (userServiceResponse) 
            return UserMapper.mapUserResponse(userServiceResponse);
        else 
            return null;
    }    
    
    /**
     * TODO
     * @param {*} param0 
     * @returns 
     */
    static async createUser({firstName,lastName,email,password}) {
        console.log("UserController: createUser ",{firstName,lastName,email,password});        
        const httpServiceResponse = await UserService.createUser(firstName,lastName,email,password);
        console.log("UserController: httpServiceResponse ",httpServiceResponse);
        return httpMapper.mapHttpResponse(httpServiceResponse);
    }

    /**
     * TODO
     * @param {*} param0 
     * @returns 
     */
    static async updateUser({firstName,lastName,email,password}) {
        console.log("UserController: updateUser ",{firstName,lastName,email,password});        
        const userServiceResponse = await UserService.getUser(id);
        console.log("UserController: userServiceResponse ",userServiceResponse);
        return UserMapper.mapUserResponse(userServiceResponse);
    }

    /**
     * TODO
     * @param {*} param0 
     * @returns 
     */
    static async deleteUser({id}) {
        console.log("UserController: deleteUser ",{id});
        const userServiceResponse = await UserService.getUser(id);
        console.log("UserController: userServiceResponse ",userServiceResponse);
        return UserMapper.mapUserResponse(userServiceResponse);
    }
}

exports.default = UserController;