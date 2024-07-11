const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", async(req, res)=> {
    let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registerdUser = await User.register(newUser, password);
    console.log(registerdUser);
});

module.exports = router;