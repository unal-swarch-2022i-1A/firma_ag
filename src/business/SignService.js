var fetch = require("node-fetch-commonjs");
const SignDto = require('../data/SignDto').default;
const { endpoints } = require('../config');

class SignService {
    /**
     * 
     * @param {*} userId 
     * @param {*} message 
     * @returns 
     */
    static async sign(userId, message) {
        const data = {"user_id": userId, "data": message};
        const response = await fetch(endpoints.sign, {
            "method": "POST",
            "body": JSON.stringify(data), // Request body
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        const json = await response.json();
        //console.log("signData: result API:",json);
        return new SignDto(json.signature, json.user_id, json.data);
    }
}

exports.default = SignService