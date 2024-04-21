// Sequelize model definition for the 'service' table
const Service = (sequelize, DataTypes) => {
    // Defining the 'service' model with specified attributes and data types
    const Service = sequelize.define("service", {
        // Auto-incrementing primary key for the 'service' table
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // Title of the service record, must not be null
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Description of the service record, must not be null
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Link associated with the service record
        link: {
            type: DataTypes.STRING,
        },
    });

    // Returning the 'service' model for use in other parts of the application
    return Service;
}

// Exporting the 'Service' model definition for use in other files
export default Service;
