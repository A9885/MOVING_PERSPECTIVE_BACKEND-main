// Importing Sequelize's 'Op' (operators) for advanced queries
import { Op } from "sequelize";

// Importing necessary modules and utilities
import db from "../../indexModel.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";
import { ErrorHandler } from "../../utils/errorhandler.js";
import { checkPostBody } from "../../utils/index.js";
import getDataUri from "../../utils/dataUri.js";
import cloudinary from "cloudinary";

// Creating the main model instance
const Master = db.master;

// =======================================================================
// *************************** Home Banner ********************************
// =======================================================================

// API endpoint for creating a new home banner
const createNewHomeBanner = catchAsyncError(async (req, res, next) => {
    // Checking if required fields are present in the request body
    await checkPostBody(['type', 'link'], req);

    // Creating a new home banner record in the database
    const data = await Master.create(req.body);

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Home banner created successfully.`, data: data });
});

// API endpoint for updating the home banner
const updateHomeBanner = catchAsyncError(async (req, res, next) => {
    // Updating the home banner record in the database based on ID
    let { title, description, link } = req.body;
    const data = await Master.findOne({ where: { id: 1 } });
    await Master.update({
        title: title != "" ? title : data.title,
        description: description != "" ? description : data.description,
        link: link != null ? link : data.link,
    }, { where: { id: 1 } });

    // Fetching the updated home banner data

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Data updated successfully`, data: data });
});

// API endpoint for fetching the home banner data
const getHomeBanner = catchAsyncError(async (req, res, next) => {
    // Fetching the home banner record from the database based on ID
    const data = await Master.findOne({ where: { type: "banner" } });

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Data fetched successfully`, data });
});

// =======================================================================
// **************************** Clients ***********************************
// =======================================================================

// API endpoint for adding a new client
const addNewClient = catchAsyncError(async (req, res, next) => {
    // Checking if required fields are present in the request body
    await checkPostBody(['link'], req);
    const { link, title, description } = req.body

    // Creating a new client record in the database
    const data = await Master.create({ link, title, description, type: "client" });

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Client saved successfully`, data: data });
});

/**
 * Update client records in the Master table.
 * This function uses the Master model to update records with the specified ID.
 * @param {*} req - Express request object.
 * @param {*} res - Express response object.
 * @param {*} next - Express next middleware function.
*/
const updateClient = catchAsyncError(async (req, res, next) => {
    const { link } = req.body
    // Update records in the Master table with the provided data and set type to "client"
    let data = await Master.update({ link, type: "client" }, { where: { id: req.params.id } });

    // Check if the update was successful (data[0] will be 1 if successful)
    data[0] === 1
        ? res.status(200).json({ resCode: 200, message: `Client records updated successfully` })
        : res.status(404).json({ resCode: 404, message: `Client not found!` });
});


// API endpoint for fetching all client records
const getClientList = catchAsyncError(async (req, res, next) => {
    // Fetching all client records from the database
    const data = await Master.findAll({ where: { type: "client" } });

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Client records fetched successfully`, data: data });
});

// API endpoint for fetching all client records
const DeleteClientById = catchAsyncError(async (req, res, next) => {
    // Fetching all client records from the database 
    const data = await Master.destroy({ where: { id: req.params.id } });

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Client deleted successfully` });
});

``

// =======================================================================
// **************************** Images ***********************************
// =======================================================================

// API endpoint for uploading an image to Cloudinary
const imageUpload = catchAsyncError(async (req, res, next) => {
    // Extracting the file from the request
    const file = req.files;

    // Converting the file to a data URI
    const fileUri = getDataUri(file.files);

    // Uploading the image to Cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

    // Sending a JSON response with the Cloudinary public ID and URL
    res.status(200).json({
        public_id: myCloud.public_id,
        url: myCloud.url
    });
});


// Defining a function named videoUpload using asynchronous error handling
const videoUpload = catchAsyncError(async (req, res, next) => {
    // Extracting files from the request
    const file = req.files;

    // Converting file data to a data URI
    const fileUri = getDataUri(file.files);

    // Uploading the video file to the Cloudinary service with resource_type set to "video"
    const myCloud = await cloudinary.v2.uploader.upload_large(fileUri.content, { resource_type: "video" });

    // Sending a JSON response with the public_id and URL of the uploaded video
    res.status(200).json({
        public_id: myCloud.public_id,
        url: myCloud.url
    });
});

// Exporting the API endpoints for use in other parts of the application
export { DeleteClientById, videoUpload, updateClient, createNewHomeBanner, updateHomeBanner, getHomeBanner, addNewClient, getClientList, imageUpload };
