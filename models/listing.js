const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: Object,
        required: true, 
        properties: {
            filename: { type: String },
            url: {
                type: String,
                required: true,
            },
        },
        default: 
                "https://unsplash.com/photos/green-trees-on-island-surrounded-by-water-during-daytime-hZ6tMbkAIMk",
        set: (v) => 
            v===""
        ?      "https://unsplash.com/photos/green-trees-on-island-surrounded-by-water-during-daytime-hZ6tMbkAIMk" 
        : v,
    },
    price: Number,
    location: String,
    country: String, 
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;