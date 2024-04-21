// Importing the express framework for building the web server
import express from "express";

// Importing the cors middleware for handling Cross-Origin Resource Sharing
import cors from "cors";

// Importing configuration settings from the "config/index.js" file
import Config from "./config/index.js";

// Importing the makeRouter function to set up routes
import { makeRouter } from "./router.js";

// Importing the Error middleware for handling errors
import { Error } from "./middleware/error.js";

// Importing additional middleware for handling file uploads
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

// Importing the Cloudinary library for cloud-based image storage
import cloudinary from "cloudinary";

// Creating an instance of the express application
const app = express();

// Using the cors middleware for Cross-Origin Resource Sharing
app.use(cors());

// Using express middleware to parse JSON requests
app.use(express.json());

// Using express middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Using the express-fileupload middleware for handling file uploads
app.use(fileUpload());

// Using bodyParser middleware for parsing JSON and URL-encoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using the makeRouter function to set up routes in the application
app.use(makeRouter());

// Using the Error middleware for handling errors in the application
app.use(Error);

// Configuring Cloudinary with API credentials
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Testing API endpoint to check if the server is running successfully
app.get('/', (req, res) => {
    res.send("MOVING PERSPECTIVE server is working successfully");
});

// Health-check API endpoint
app.get('/health-check', (req, res) => {
    res.send("MOVING PERSPECTIVE server Health is working successfully");
});

// Listening for incoming requests on the specified port
app.listen(Config.port, () => {
    console.log(`MOVING PERSPECTIVE server is running on port ${Config.port}`);
});
