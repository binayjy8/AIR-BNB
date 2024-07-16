module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async(req, res)=> {
    try {
        let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registerdUser = await User.register(newUser, password);
    console.log(registerdUser);
    req.login(registerdUser, (err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
    });
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    
}