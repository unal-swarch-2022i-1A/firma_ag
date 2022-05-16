class Key {

}
class RestStatus{
    constructor(code, message){
        this.httpCode = code;
        this.httpMessage = message;
    }
}

exports.RestStatus = RestStatus;