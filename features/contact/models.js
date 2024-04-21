// Defining a Sequelize model for the 'contact' table
const Contact = (sequelize, DataTypes) => {
    // Creating the 'contact' model with specified attributes and data types
    const Contact = sequelize.define("contact", {
        // Auto-incrementing primary key for the 'contact' table
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // Name of the contact, must not be null
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Email address of the contact, must not be null
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Phone number of the contact, must not be null
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Subject of the contact, must not be null
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Message content of the contact, must not be null
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Returning the 'contact' model for use in other parts of the application
    return Contact;
};

// Exporting the 'Contact' model definition for use in other files
export default Contact;