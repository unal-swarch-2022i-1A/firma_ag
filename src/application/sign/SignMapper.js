const SignResponse = require('./SignResponse').default;

function mapSignResponse(signServiceResponse) {
    return new SignResponse(
        signServiceResponse.signature, 
        signServiceResponse.userId,
        signServiceResponse.data
        )
}

exports.mapSignResponse = mapSignResponse;