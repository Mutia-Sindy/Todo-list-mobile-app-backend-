const express = require('express');
const app = express();
const connectDB = require('./Scripts/connectMongoDB');
app.get('/', (req,res) => {
    res.send('Hello, found my backend application');
});

connectDB();

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});