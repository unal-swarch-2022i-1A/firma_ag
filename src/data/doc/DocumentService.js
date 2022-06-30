var fetch = require("node-fetch-commonjs");
const getUserDto = require('./getDocDto').default;
const { endpoints } = require('../../config');

class UserService {

    /**
     * 
     * @param {*} id 
     * @returns 
     */
    static async getDoc(id){
        console.log(`UserService: getUser(${id})...`);
        const url = endpoints.user + `${id}`;
        const response = await fetch(url, {
            "method": "GET", 
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        console.log("(...) http status: ",response.status);
        switch(response.status) {
            case 200:
              const json = await response.json();
              console.log("...json:",json);              
              return new getUserDto(json);
            default:
              return null;
          }               
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