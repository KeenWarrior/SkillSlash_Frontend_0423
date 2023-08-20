const mongoose = require("mongoose");
const toJSON = require("./plugins/toJSON.plugin");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true
    }, 
    password: {
        type: String,
        required: true,
        min: 6,
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    }, 
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});

userSchema.methods.verifyPassword = async function(password){
    console.log("verifyPassword");
    return await bcrypt.compare(password, this.password);
}

userSchema.plugin(toJSON);

const User = mongoose.model("User", userSchema);

module.exports = User;

