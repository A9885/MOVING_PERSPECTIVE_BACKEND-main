// Importing configuration settings from the "config/index.js" file
import Config from "./config/index.js";

// Importing Sequelize components for database operations
import { DataTypes, Sequelize } from "sequelize";

// Connecting to the database using Sequelize ORM
const sequelize = new Sequelize(
    Config.DATABASE,
    Config.USER,
    Config.PASSWORD, {
    host: Config.HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    // Connection pool configuration
    pool: {
        max: Config.pool.max,
        min: Config.pool.min,
        acquire: Config.pool.acquire,
        idle: Config.pool.idle
    },

    // Disabling logging for cleaner output
    logging: false
});

// Authenticating the connection to the database
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Creating an object to hold references to Sequelize and the connected database instance
const db = {};

// Assigning Sequelize and the connected instance to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importing and creating schemas for different features

// Master schema
import Master from './features/master/models.js'
db.master = Master(sequelize, DataTypes);

// Contact schema
import Contact from "./features/contact/models.js";
db.contact = Contact(sequelize, DataTypes);

// Gallery schema
import Gallery from "./features/gallery/models.js";
db.gallery = Gallery(sequelize, DataTypes);

// Service schema
import Service from "./features/service/models.js";
db.service = Service(sequelize, DataTypes);

// Synchronizing the database with Sequelize ORM
db.sequelize.sync({ force: false }).then(() => {
    console.log("Database connected successfully!");
});

// Exporting the db object containing Sequelize and connected instances, and defined schemas
export default db;
