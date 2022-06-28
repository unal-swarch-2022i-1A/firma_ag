class HttpResponse {
    httpCode;
    httpMessage;
    constructor(httpCode, httpMessage){ 
        this.httpCode = httpCode;
        this.httpMessage = httpMessage;
    }
}

exports.default = HttpResponse;