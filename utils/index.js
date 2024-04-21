/**
 * Checks if required parameters are present in the request body.
 * @param {Array} requiredFields - An array of field names that are required.
 * @param {Object} req - Express request object.
 * @throws {Error} - Throws an error if any required field is missing.
 */
export function checkPostBody(
    requiredFields,
    req
) {
    // Iterating through the required fields
    for (const field of requiredFields) {
        // Checking if the field is present in the request body
        if (!Object.prototype.hasOwnProperty.call(req.body, field)) {
            // Throwing an error if the required field is missing
            throw new Error(`Missing field: ${field}.`);
        }
    }
}