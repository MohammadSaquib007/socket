const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
{
    firstName: {
        type: String,
        require: true,
        trim: true,

    },
    lastName: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type:String,
        require: true,
        trim: true,
        unique: true,
    },
    Phone: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    }
},{timestamps: true});

module.exports = mongoose.model('user', userSchema)