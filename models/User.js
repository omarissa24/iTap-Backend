import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
    },
    bio: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    youtube: {
        type: String,
        required: false,
    },
    snapchat: {
        type: String,
        required: false,
    },
    paypal: {
        type: String,
        required: false,
    },
});

export default mongoose.model("User", userSchema);