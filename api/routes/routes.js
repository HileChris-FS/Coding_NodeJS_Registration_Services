const express = require('express');
const postRegistration = require('../../db/db');
const router = express.Router();

router.get("/",(req, res) => {
    res.status(200).json({
        message: "Server is up",
        method: req.method,
    });
});

router.post("/registration", (req, res, next)=> {
    postRegistration(req).then(result =>{
        console.log(result);
        res.status(200).json({
            message: "Registration Saved",
            status: 200,
            registration: {
                firstname: result.firstname,
                lastname: result.lastname,
                address: result.address,
                city: result.city,
                state: result.state,
                zip: result.zip,
                email: result.email,
                password: result.password,
                metadata: {
                    hostname: req.hostname,
                    method: req.method,
                },
            }, 
        });
    }).catch(err => {
        res.status(500).json({
            message: "Registration Failed",
            status: 500,
            error: {
                message: err.message,
                metadata: {
                    hostname: req.hostname,
                    method: req.method,
                },
            }, 
        });
    })
});


module.exports = router;