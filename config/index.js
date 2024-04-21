// Importing the dotenv library to load environment variables from a .env file
import * as dotenv from 'dotenv';

// Loading environment variables from the .env file into the process.env object
dotenv.config();

// Configuration object with various parameters
const Config = {
    // Database connection parameters
    HOST: process.env.HOST,
    PASSWORD: process.env.PASSWORD,
    USER: process.env.USER,
    DATABASE: process.env.DATABASE,
    
    // AWS S3 Bucket Keys and credentials
    BUCKET_NAME: process.env.BUCKET_NAME,
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    REGION: process.env.REGION,

    // Connection pool settings for managing database connections
    pool: {
        max: 5, // Maximum number of connections in the pool
        min: 0, // Minimum number of connections in the pool
        acquire: process.env.ACQUIRE, // Maximum time, in milliseconds, that a connection can be acquired
        idle: process.env.IDLE // Maximum time, in milliseconds, that a connection can be idle before being released
    },

    // Port number for the server to listen on, defaulting to 9992 if not provided
    port: process.env.PORT || 9992
};

// Exporting the configuration object for use in other parts of the application
export default Config;