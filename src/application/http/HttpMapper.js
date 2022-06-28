const HttpResponse = require('./HttpResponse').default;

function mapHttpResponse(httpServiceResponse) {
    return new HttpResponse(
        httpServiceResponse.httpCode,
        httpServiceResponse.httpMessage,
    )
}

exports.mapHttpResponse = mapHttpResponse;