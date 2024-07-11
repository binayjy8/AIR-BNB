const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", async(req, res)=> {
    let {usernmae, email, password} = req.body;
    User({email, username});
});

module.exports = router;