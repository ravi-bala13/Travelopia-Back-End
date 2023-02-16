const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( 

    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        place: {type: String, required: false},
        no_of_travellers: {type: Number, required: false},
        currency: {type: Number, required: false}
    }

);


const User = mongoose.model("user", userSchema);

module.exports = User;
