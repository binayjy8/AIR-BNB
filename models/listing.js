const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) => v==="https://unsplash.com/photos/green-trees-on-island-surrounded-by-water-during-daytime-hZ6tMbkAIMk"
        ? "" : v,
    },
    price: Number,
    location: String,
    country: String, 
});

const listing = mongoose.model("listing", listingSchema);
modules.export = listing;