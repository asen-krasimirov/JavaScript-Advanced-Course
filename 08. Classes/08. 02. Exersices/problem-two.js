

class Request {
    constructor(method, uri, version , message) {
        // •	method(String)
        // •	uri(String)
        // •	version(String)
        // •	message(String)
        // •	response(String)
        // •	fulfilled(Boolean)

        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}