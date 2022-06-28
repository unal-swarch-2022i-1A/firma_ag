const SignService = require('../../data/sign/SignService').default;
const SignMapper = require('./SignMapper');
class SignController {
    /**
     * 
     * @param {*} userId 
     * @param {*} message 
     * @returns 
     */
    static async sign({userId, data}) {
        console.log("SignController: sign ",{userId, data});
        const signServiceResponse = await SignService.sign(userId,data);
        return SignMapper.mapSignResponse(signServiceResponse);
    }
}

exports.default = SignController;