const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('./../configs/config');
const Image = require('./../models/mongodb/Image').model;
const User = require('./../models/mongodb/User').model;

mongoose.connect(config.MONGO_URI, err => {
    if(err) console.log(err);
    console.log('Connected to MongoDB');
})

const register = async (req, res) => {
    
    const { regno, email, password: plaintextPassword, branch, designation } = req.body;
    
    try {

        const hashedPassword = await bcrypt.hash(plaintextPassword, 10);

        const dbResponse = await User.create({
            email,
            password: hashedPassword,
            regno,
            branch,
            designation
        });

        console.log(dbResponse);
        return res.status(200).json({status: 'ok'});

    } catch(err) {

        console.log(err);
        if(err.code === 11000)
            return res.status(400).json({status: 'error', error: 'user already exists'});
        return res.status(400).json({status: 'error', error: 'some server error occured'});
    }
    
};

module.exports = {
    register
}