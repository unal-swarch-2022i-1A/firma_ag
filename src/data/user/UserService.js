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

    static async createUser(firstName,lastName,email,password){
        const url = endpoints.user;
        const data = {"firstName": firstName, "lastName": lastName, "email": email, "password": password}
        const response = await fetch(url, {
            "method": "POST",
            "body": JSON.stringify(data), 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        })         
        console.log("UserService: response:",{httpCode:response.status, httpMessage:response.statusText});  
        return {httpCode:response.status, httpMessage:response.statusText};
    }
}

exports.default = UserService