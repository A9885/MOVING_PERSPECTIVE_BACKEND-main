// Importing controller functions from the "controller.js" file
import { DeleteContact, createNewContact, getAllContact, searchContactName } from "./controller.js";

/**
 * Master route configuration for handling contact-related operations.
 * @param {Object} router - Express router object for defining routes.
 */
export default async function ContactRoutes(router) {
    // Route for creating a new contact
    router.post('/api/contact/save_detail', createNewContact);

    // Route for fetching all contacts
    router.get('/api/contact/get_all', getAllContact);

    // Route for deleting a contact by ID
    router.delete('/api/contact/:id', DeleteContact);

    // Route for searching contacts by name
    router.get('/api/contact/search/:name', searchContactName);
}
