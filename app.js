const express = require("express");
const app = express();


const path = require("path");

app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});


app.listen(3000, () => {
    console.log("Server started at port 3000");
});