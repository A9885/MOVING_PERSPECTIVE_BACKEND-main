// Importing the custom ErrorHandler utility for handling errors
import { ErrorHandler } from "../utils/errorhandler.js";

/**
 * Express middleware for handling errors and sending appropriate responses.
 * @param {Object} error - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next function.
 */
export const Error = (error, req, res, next) => {
    // Setting default values for status code and error message
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal Server Error";
    
    // Sending a JSON response with the error status code and message
    res.status(error.statusCode).json({
        resCode: error.statusCode,
        message: error.message,
    });
};