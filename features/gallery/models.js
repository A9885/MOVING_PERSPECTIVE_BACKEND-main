// Defining a Sequelize model for the 'gallery' table
const Gallery = (sequelize, DataTypes) => {
    // Creating the 'gallery' model with specified attributes and data types
    const Gallery = sequelize.define("gallery", {
        // Auto-incrementing primary key for the 'gallery' table
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        // Name of the gallery, must not be null
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Email address of the gallery, must not be null
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Phone number of the gallery, must not be null
        link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Returning the 'gallery' model for use in other parts of the application
    return Gallery;
};

// Exporting the 'Gallery' model definition for use in other files
export default Gallery;