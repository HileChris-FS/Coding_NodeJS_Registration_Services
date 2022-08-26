const express = require('express');
const router = express.Router();
const validate = require("../../validation/validation"
)

router.get("/",(req, res) => {
    res.render('index', {
        pagename: "Home",
    });
});

router.get("/about",(req, res) => {
    res.render('about', {
        pagename: "About",
    });
});

router.get("/contact",(req, res) => {
    res.render('contact', {
        pagename: "Contact",
    });
});

router.get("/projects",(req, res) => {
    res.render('projects', {
        pagename: "Projects",
    });
});

router.get("/registration",(req, res) => {
    res.render('registration', {
        pagename: "Registration",
        
    });
   
});

router.post("/registration", (req, res) => {
    const errors = validate(req);
    if(Object.keys(errors).length === 0){
        errors.message = "Registration Successful"
    } else {
        errors.message = 'Registration failed'
    }

    console.log(req.body)
    res.render('registration', {
        pagename: "Registration",
        errors: errors,
        input: input,
    });
});

module.exports = router;