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
    constructor(userId, firsName, lastName, email, password) {
        this.userId = userId;
        this.firsName = firsName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

class Document {
    constructor(docId, name, folder) {
        this.docId = docId;
        this.name = name;
        this.folder = folder
    }
}

exports.RestStatus = RestStatus;
exports.Signature = Signature;
exports.User = User;
exports.Document = Document;