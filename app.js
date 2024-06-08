const express = require("express");
const app = express();
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect()
}

app.get("/", (req, res) => {
    res.send("hy, i'm the root");
});

app.listen(8080, ()=> {
    console.log("listening to the port");
});