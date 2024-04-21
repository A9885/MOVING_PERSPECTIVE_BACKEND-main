// Importing the DataURIParser class from the "datauri/parser.js" module
import DataURIParser from "datauri/parser.js";
// Importing the path module for working with file paths
import path from "path";

/**
 * Converts a file object into a data URI.
 * @param {Object} file - The file object containing name and data properties.
 * @returns {String} - The data URI string.
 */
const getDataUri = (file) => {
    // Creating a new instance of the DataURIParser class
    const parser = new DataURIParser();

    // Extracting the file extension using the path module
    const extName = path.extname(file.name);

    // Formatting and returning the data URI
    return parser.format(extName, file.data);
};

// Exporting the getDataUri function for use in other files
export default getDataUri;