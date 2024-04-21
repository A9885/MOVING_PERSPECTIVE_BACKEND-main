// Importing necessary modules and utilities
import db from "../../indexModel.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";
import { checkPostBody } from "../../utils/index.js";
import getDataUri from "../../utils/dataUri.js";
import cloudinary from "cloudinary";

// Creating the main model instance
const Service = db.service;

// =======================================================================
// **************************** Service ***********************************
// =======================================================================

// API endpoint for updating a service
const CreateService = catchAsyncError(async (req, res, next) => {
    // Extracting the request body
    let body = req.body;

    // Updating the service record in the database based on ID
    const data = await Service.create(body);

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Service updated successfully`, data });
});

// API endpoint for updating a service
const updateService = catchAsyncError(async (req, res, next) => {
    // Extracting the request body
    let { title, description, link } = req.body;
    let service = await Service.findOne({ where: { id: req.params.id } });

    // Updating the service record in the database based on ID
    await Service.update({
        title: title != "" ? title : service.title,
        description: description != "" ? description : service.description,
        link: link != null ? link : service.link,
    }, { where: { id: req.params.id } });

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Service updated successfully` });
});

// API endpoint for fetching all service records
const getServiceAll = catchAsyncError(async (req, res, next) => {
    // Fetching all service records from the database
    const data = await Service.findAll();

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Data fetched successfully`, data: data });
});

// API endpoint for fetching all service records
const deleteService = catchAsyncError(async (req, res, next) => {
    // Fetching all service records from the database
    const data = await Service.destroy({ where: { id: req.params.id } });

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Service deleted successfully` });
});

// Exporting the API endpoints for use in other parts of the application
export { updateService, getServiceAll, CreateService, deleteService };
