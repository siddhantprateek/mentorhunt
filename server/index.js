const express = require('express');
const dotenv = require('dotenv');
// dotenv().config();

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is Running perfect')
})

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})

