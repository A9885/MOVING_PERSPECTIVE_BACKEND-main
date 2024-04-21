// Importing controller functions from the "controller.js" file
import { addNewClient, updateClient, createNewHomeBanner, getClientList, getHomeBanner, imageUpload, updateHomeBanner, videoUpload, DeleteClientById } from './controller.js';

/**
 * Master route configuration for handling operations related to the 'Master' entity.
 * @param {Object} router - Express router object for defining routes.
 */
export default async function MasterRoutes(router) {
    // =====================================
    // Home Banner API routes
    // =====================================

    // Route for creating a new home banner
    router.post('/api/home_banner/create_new', createNewHomeBanner);

    // Route for updating the home banner
    router.put('/api/home_banner', updateHomeBanner);

    // Route for fetching the home banner data
    router.get('/api/home_banner', getHomeBanner);

    // =================================
    // Client API routes
    // =================================
    // Route for adding a new client
    router.post('/api/client/create_new', addNewClient);

    // Route for update client
    router.put('/api/client/:id', updateClient);

    // Route for fetching all client records
    router.get('/api/client', getClientList);

    // Route for fetching all client records
    router.delete('/api/client/:id', DeleteClientById);


    // ================================
    // File Upload API route
    // ================================
    // Route for uploading files (image upload to Cloudinary)
    router.post('/api/files_upload', imageUpload);
    router.post('/api/video_upload', videoUpload);
}
