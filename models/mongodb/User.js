const mongoose = require('mongoose');
const uuid = require('uuid');
const imageSchema = require('./Image').imageSchema;

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true, default: `user-${uuid.v4()}` },
        name: { type: String, required: true, default: 'User' },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        regno: { type: String, required: true, unique: true },
        branch: { type: String },
        college: { type: String, default: 'C. V. Raman College of Engineering' },
        designation: { type: String, required: true },
        img: imageSchema
    },
    {
        collection: 'users'
    }
);

const model = mongoose.model('UserSchema', userSchema);

module.exports = {
    userSchema,
    model
};