const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config();
const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 4000;

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is Running perfect')
// })

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');

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



