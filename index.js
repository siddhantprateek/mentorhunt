const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')
const path  = require('path')
// app configuration
dotenv.config();
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 4000;

// route
app.use(express.static(__dirname, './client/build'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})


const app = express();

// middleware
app.use(express.json())
app.use(cors())

// routes

app.use((req, res, next)=> {
    if(req.method == "OPTIONS"){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }

    next();
})

app.use('/api/data/comment', routes);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_DB)
        app.listen(PORT, () => {
            console.log(`Server Running at http://localhost:${PORT}/api/data/comment/`)
        })
    }catch(err){
        console.error(err);
    }
}

start();



