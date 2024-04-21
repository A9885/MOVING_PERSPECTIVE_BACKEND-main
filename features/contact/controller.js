// Importing the Sequelize library's 'Op' (operators) for advanced queries
import { Op } from "sequelize";

// Importing the database model and utility functions
import db from "../../indexModel.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";
import { ErrorHandler } from "../../utils/errorhandler.js";
import { checkPostBody } from "../../utils/index.js";

// Creating a model instance for the 'Contact' model from the imported database
const Contact = db.contact;

// API endpoint for creating a new contact
const createNewContact = catchAsyncError(async (req, res, next) => {
    // Checking if the required fields are present in the request body
    checkPostBody(['name', "email", 'phone', "message", 'subject'], req);

    // Creating a new contact record in the database
    const data = await Contact.create(req.body);

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Contact Data saved successfully`, data: data });
});

// API endpoint for retrieving all contacts
const getAllContact = catchAsyncError(async (req, res, next) => {
    // Fetching all contact records from the database
    const data = await Contact.findAll();

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Data fetched successfully`, data: data });
});

// API endpoint for deleting a contact by ID
const DeleteContact = catchAsyncError(async (req, res, next) => {
    // Deleting a contact record from the database based on the provided ID
    await Contact.destroy({ where: { id: req.params.id } });

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Data deleted successfully` });
});

/**
 * API endpoint for searching contacts by name
 * @param {*} req 
 * @param {*} res 
 */
const searchContactName = catchAsyncError(async (req, res, next) => {
    // Searching for contact records with names containing the provided string
    const data = await Contact.findAll({
        where: {
            [Op.or]: [{ name: { [Op.like]: '%' + req.params.name + '%' } }]
        }
    });

    // Sending a JSON response with the search results or a message if no data is found
    data.length > 0
        ? res.status(200).json({ status: 200, message: "Data fetched successfully!", data })
        : res.status(200).json({ status: 200, message: `No data available for ${req.params.name}`, data });
});

// Exporting the API endpoints for use in other parts of the application
export { createNewContact, getAllContact, searchContactName, DeleteContact };
