const express = require("express");
const router = express.Router();

app.get("/signup", (req, res) => {
    res.send("form");
});

module.exports = router;