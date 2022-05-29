class Key {

}
class RestStatus{
    constructor(code, message){
        this.httpCode = code;
        this.httpMessage = message;
    }
}

class Signature{
    constructor(signature, userId, data){ 
        this.signature = signature;
        this.userId = userId;
        this.data = data;
    }
}

class User {
    constructor(userId, firstName, lastName, email, password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
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
exports.Signature = Signature;
exports.User = User;
exports.Document = Document;