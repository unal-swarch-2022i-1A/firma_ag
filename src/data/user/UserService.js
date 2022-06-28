var fetch = require("node-fetch-commonjs");
const getserDto = require('./getUserDto').default;
const { endpoints } = require('../../config');

class UserService {

    /**
     * 
     * @param {*} id 
     * @returns 
     */
    static async getUser(id){
        const url = endpoints.user + `${id}`;
        const response = await fetch(url, {
            "method": "GET", 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        const json = await response.json();
        console.log("UserService: json:",json);
        return new getserDto(json);
    }    
}

exports.default = UserService