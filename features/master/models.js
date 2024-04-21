// Sequelize model definition for the 'master' table
const Master = (sequelize, DataTypes) => {
    // Defining the 'master' model with specified attributes and data types
    const Master = sequelize.define("master", {
        // Auto-incrementing primary key for the 'master' table
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // Link associated with the master record
        link: {
            type: DataTypes.STRING,
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
        // Type of the master record, must not be null
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Returning the 'master' model for use in other parts of the application
    return Master;
}

// Exporting the 'Master' model definition for use in other files
export default Master;
