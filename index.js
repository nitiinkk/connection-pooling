"us strict";

const express = require("express");
const connectDB = require("./db");
const app = express();
const PORT = 3000;

//user route
app.use("/user", async function (req, res, next) {
    console.log("Fetching user Details");
    try {
        const db = await connectDB();
        const result = await db.query('SELECT * from person');
        return res.status(200).json({
            success: "true",
            data: result.rows[0]
        })
    } catch (err) {
        next(err);
    }
})

//errorHandler middleware
app.use((err, req, res, next) => {
    return res.status(500).json({
        Error: err,
        message: "Encountered Error while establishing connection to DB"
    })
})

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});