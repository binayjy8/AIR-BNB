const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/test";

async function main() {
    await mongoose.connect();
}

app.get("/", (req, res) => {
    res.send("hy, i'm the root");
});

app.listen(8080, ()=> {
    console.log("listening to the port");
});