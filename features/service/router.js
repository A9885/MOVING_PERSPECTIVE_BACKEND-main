// Importing controller functions from the "controller.js" file
import { updateService, getServiceAll, CreateService, deleteService } from './controller.js';

/**
 * Service route configuration for handling operations related to the 'Service' entity.
 * @param {Object} router - Express router object for defining routes.
 */
export default async function ServiceRoutes(router) {
    // Service API routes

    // Route for updating a service by ID
    router.post('/api/service', CreateService);

    // Route for updating a service by ID
    router.put('/api/service/:id', updateService);

    // Route for delete a service by ID
    router.delete('/api/service/:id', deleteService);

    // Route for fetching all service records
    router.get('/api/service', getServiceAll);
}
