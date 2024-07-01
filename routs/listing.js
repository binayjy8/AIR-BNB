const express = require("express");
const router = express.Router();

app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.get("/listings/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
}));


app.post("/listings", validateListing,
    wrapAsync(async (req, res, next) => {
       let result = listingSchema.validate(req.body); 
       console.log(result);
       if(result.error) {
           throw new ExpressError(400, result.error);
       }
   const newListing = new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
   })
);

app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
   let {id} = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/edit.ejs", { listing });
}));

app.put("/listings/:id", validateListing, 
   wrapAsync(async (req, res) => {  
   let {id} = req.params;
   await Listing.findByIdAndUpdate(id, {...req.body.listing});
   res.redirect(`/listings/${id}`);
}));

app.delete("/listings/:id", wrapAsync(async (req, res) => {
   let {id} = req.params;
   let deletedListing = await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   res.redirect("/listings");
}));