const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    database: 'testdb',
    port: 5432,
    host: 'localhost',
    password: 'admin',
    //idleTimeoutMillis: 10000, //release idle connection back
    //connectionTimeoutMillis: 15000, //the no of seconds end user waits for the db connection before erroring out
    max: 3, //no of connections to be available in pool
})

async function connectDB(instanceId) {
    try {
        console.log("establishing connection to DB instance");
        await pool.connect();
        console.log("succesfully established db connection to instance");
        return pool;
    } catch (err) {
        console.log("Error in connectDB() fn ", err);
        throw err;
    }
}

module.exports =  connectDB;