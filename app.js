const express = require("express");
const app = express();


const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
});


app.listen(3000, () => {
    console.log("Server started at port 3000");
});