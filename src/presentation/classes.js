const User = require('../application/user/UserResponse').default

class RestStatus{
    constructor(code, message){
        this.httpCode = code;
        this.httpMessage = message;
    }
}

class Document {
    constructor(docId, title, author) {
        this.docId = docId;
        this.title = title;
        this.author = author
    }
}

exports.RestStatus = RestStatus;
//exports.User = User;
exports.Document = Document;