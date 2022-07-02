const mongoose = require('mongoose');
const uuid = require('uuid');

const imageSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true, unique: true, default: `user-${uuid.v4()}` },
        actualName: { type: String, required: true },
        fieldName: { type: String, required: true },
        fileName: { type: String, required: true },
        path: { type: String, required: true },
        mimetype: { type: String, required: true }
    },
    {
        collection: 'images'
    }
);

const model = mongoose.model('ImageSchema', imageSchema);

module.exports = {
    imageSchema,
    model
};