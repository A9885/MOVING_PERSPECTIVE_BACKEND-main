/**
 * Middleware to catch asynchronous errors and forward them to the global error handler.
 * @param {Function} fn - Asynchronous function to be executed.
 * @returns {Function} Express middleware function.
 */
const catchAsyncError = (fn) => (req, res, next) => {
    // Wrapping the asynchronous function in a Promise to handle errors
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Exporting the catchAsyncError middleware for use in other files
export { catchAsyncError };