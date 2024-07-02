const express = require("express");
const router = express.Router();

//post review route
app.post("/listings/:id/reviews",
    validateReview,
    wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

//Delete review rout
app.delete(
    "/listings/:id/reviews/:reviewId", 
    wrapAsync(async(req, res) => {
        let { id, reviewId } = req.params;


        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId);

        res.redirect(`/listings/${id}`);
    }));

    module.exports = router;