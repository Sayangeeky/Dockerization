const express = require('express')
const app = express()

require('dotenv').config();
const port = process.env.PORT 

app.get('/', (req,res) => {
    res.json({
        msg: "LEARNING DOCKER"
    })
})

app.listen(port, () => {
    console.log(`Server is listening at ${port}...`);
})