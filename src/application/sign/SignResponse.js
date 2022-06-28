class SignClass {
    signature;
    userId;
    data;
    constructor(signature, userId, data){ 
        this.signature = signature;
        this.userId = userId;
        this.data = data;
    };    
}

exports.default = SignClass;