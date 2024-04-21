// Importing the express framework for building the web server
import express from "express";

// Importing route configurations for the 'master' feature
import masterRoutes from "./features/master/router.js";

// Importing route configurations for the 'contact' feature
import ContactRoutes from "./features/contact/router.js";
import { mailer } from "./features/mailSendTesting.js";
import GalleryRoutes from "./features/gallery/router.js";
import ServiceRoutes from "./features/service/router.js";

/**
 * Factory function to create the main Express router with configured routes.
 * @returns {Object} - Express router object.
 */
function makeRouter() {
    // Creating an instance of the Express router
    var router = express.Router();

    // Default route for checking if the server is working fine
    router.get("/", function (_, res) {
        res.send("MOVING PERSPECTIVE is Working fine 😊");
    });

    router.get('/api/send_mail/:name/:contact', mailer)

    // Configuring routes for the 'master' feature
    masterRoutes(router);

    // Configuring routes for the 'contact' feature
    ContactRoutes(router);

    // Configuring routes for the 'gallery' feature
    GalleryRoutes(router);

    // Configuring routes for the 'service' feature
    ServiceRoutes(router);

    // Returning the configured router
    return router;
}

// Exporting the makeRouter function for use in other files
export { makeRouter };