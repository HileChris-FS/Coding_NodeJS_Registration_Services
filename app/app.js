const mongoose = require('mongoose');
const express = require("express");
const router = require("../api/routes/routes");
const app = express();
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
//all request will handle json
app.use(express.json());

// handle CORS
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE')
    }
    next();
});

//middleware for EJS Templating
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

// static site middleware
app.use(express.static('public'));
app.use(express.static('views'));

app.use("/", router)
app.use("/registration", validation)

//error handling middleware
app.use((req,res,next) => {
    const error = new Error('NOT FOUND!!!');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        error: {
            message: error. message,
            status: error.status,
        },
    });
});

mongoose.connect(process.env.db_url), (err)=> {
    if(err){
        console.error('Error', err.message);
    }
    else{
        console.log("MongoDB connected successuflly")
    }
}

module.exports = app;