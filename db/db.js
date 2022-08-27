const { default: mongoose } = require('mongoose');
const Registration = require('../api/models/registration');
const bcrypt = require('bcrypt');

const postRegistration = async (req) => {
    const salt = await bcrypt.genSalt(10)
    let password = req.body.password;  
    password = await bcrypt.hash(password, salt);
 
    const registration = new Registration({
        _id: mongoose.Types.ObjectId(),
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        password: password,
    });

    return await registration.save();
};

module.exports = postRegistration;