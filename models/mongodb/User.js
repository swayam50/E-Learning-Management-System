const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        regno: { type: String, required: true, unique: true },
        branch: { type: String },
        designation: { type: String },
        password: { type: String, required: true },
        img: { data: Buffer, contentType: String }
    },
    {
        collection: 'users'
    }
);

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model;