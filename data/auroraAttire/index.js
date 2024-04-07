const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

// Function to establish database connection
const establishConnection = async () => {
    try {
        // Create a new pool with the database configuration from config.js
        let pool = await sql.connect({
            server: config.sql.server,
            database: config.sql.database,
            user: config.sql.user,
            password: config.sql.password,
            options: {
                encrypt: config.sql.options.encrypt,
                enableArithAbort: config.sql.options.enableArithAbort
            }
        });
        return pool;
    } catch (error) {
        console.log("Error establishing database connection:", error.message);
        throw error; // Rethrow error to handle it in the caller function
    }
};

// Function to get user data from the database
const getUser = async () => {
    try {
        // Establish database connection
        let pool = await establishConnection();
        
        // Load SQL queries
        const sqlQueries = await utils.loadSqlQueries('AuroraAttire');

        // Execute SQL query to get user data
        const userList = await pool.request().query(sqlQueries.getAllUser);
        
        // Return user data
        return userList.recordset;
    } catch (error) {
        console.log("Error retrieving user data:", error.message);
        throw error; // Rethrow error to handle it in the caller function
    }
};

module.exports = {
    getUser
};

