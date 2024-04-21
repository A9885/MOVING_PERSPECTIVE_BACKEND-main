// Importing the Sequelize library's 'Op' (operators) for advanced queries
import { Op } from "sequelize";

// Importing the database model and utility functions
import db from "../../indexModel.js";
import { catchAsyncError } from "../../middleware/catchAsyncError.js";
import { checkPostBody } from "../../utils/index.js";

// Creating a model instance for the 'Gallery' model from the imported database
const Gallery = db.gallery;

// API endpoint for creating a new gallery
const createNewGallery = catchAsyncError(async (req, res, next) => {
    // Checking if the required fields are present in the request body
    checkPostBody(['category', "type", 'link'], req);

    // Creating a new gallery record in the database
    const data = await Gallery.create(req.body);

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Gallery Data saved successfully`, data: data });
});

// API endpoint for creating a new gallery
const updateGallery = catchAsyncError(async (req, res, next) => {
    // Checking if the required fields are present in the request body
    const { category, type, link } = req.body

    let existData = await Gallery.findOne({ where: { id: req.params.id } })

    // Creating a new gallery record in the database
    await Gallery.update(
        {
            category: category || existData.category,
            type: type || existData.type,
            link: link || existData.link,
        },
        { where: { id: req.params.id } })

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Gallery update successfully` });
});

// API endpoint for retrieving all gallerys
const getAllGallery = catchAsyncError(async (req, res, next) => {
    // Fetching all gallery records from the database
    const data = await Gallery.findAll({ attributes: ['category'], group: ['category'] });

    // Sending a JSON response with the fetched data
    res.status(200).json({ resCode: 200, message: `Data fetched successfully`, data: data });
});

// API endpoint for deleting a gallery by ID
const DeleteGalleryItem = catchAsyncError(async (req, res, next) => {
    // Deleting a gallery record from the database based on the provided ID
    await Gallery.destroy({ where: { id: req.params.id } });

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Data deleted successfully` });
});

// API endpoint for deleting a gallery by ID
const DeleteGalleryCategory = catchAsyncError(async (req, res, next) => {
    // Deleting a gallery record from the database based on the provided ID
    await Gallery.destroy({ where: { category: req.params.category } });

    // Sending a JSON response indicating success
    res.status(200).json({ resCode: 200, message: `Category deleted successfully` });
});

/**
 * API endpoint for searching gallerys by name
 * @param {*} req 
 * @param {*} res 
 */
const searchGalleryCategory = catchAsyncError(async (req, res, next) => {
    const { category } = req.params
    console.log("req.params", req.params.category, category);
    // Searching for gallery records with names containing the provided string
    const data = category == "all"
        ? await Gallery.findAll()
        : await Gallery.findAll({
            where: {
                [Op.or]: [{ category: { [Op.like]: '%' + category + '%' } }]
            }
        })

    // Sending a JSON response with the search results or a message if no data is found
    data.length > 0
        ? res.status(200).json({ status: 200, message: "Data fetched successfully!", data })
        : res.status(200).json({ status: 200, message: `No data available for ${category}`, data });
});

// Exporting the API endpoints for use in other parts of the application
export { updateGallery, createNewGallery, getAllGallery, searchGalleryCategory, DeleteGalleryCategory, DeleteGalleryItem };
