// Importing controller functions from the "controller.js" file
import { DeleteGalleryCategory, DeleteGalleryItem, createNewGallery, getAllGallery, searchGalleryCategory, updateGallery, } from "./controller.js";

/**
 * Master route configuration for handling gallery-related operations.
 * @param {Object} router - Express router object for defining routes.
 */
export default async function GalleryRoutes(router) {
    // Route for creating a new gallery
    router.post('/api/gallery/create_new', createNewGallery);

    // Route for Update a new gallery
    router.put('/api/gallery/:id', updateGallery);

    // Route for fetching all gallery
    router.get('/api/gallery/get_all_category', getAllGallery);

    // Route for deleting a gallery by ID
    router.delete('/api/gallery/item/:id', DeleteGalleryItem);
    router.delete('/api/gallery/category/:category', DeleteGalleryCategory);

    // Route for searching gallery by name
    router.get('/api/gallery/search/:category', searchGalleryCategory);
}
