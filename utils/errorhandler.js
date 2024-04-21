/**
 * Custom error class extending the built-in Error class.
 * @extends Error
 */
class ErrorHandler extends Error {
    /**
     * Constructor for the ErrorHandler class.
     * @param {String} message - The error message.
     * @param {Number} statusCode - The HTTP status code associated with the error.
     */
    constructor(message, statusCode) {
        // Calling the constructor of the base class (Error) with the provided message
        super(message);
        
        // Setting the HTTP status code for the error
        this.statusCode = statusCode;
    }
}

// Exporting the ErrorHandler class for use in other files
export { ErrorHandler };