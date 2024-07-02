const express = require("express");
const router = express.Router();

//post review route
router.post("/",
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
router.delete(
    "/:reviewId", 
    wrapAsync(async(req, res) => {
        let { id, reviewId } = req.params;


        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId);

        res.redirect(`/listings/${id}`);
    }));

    module.exports = router;