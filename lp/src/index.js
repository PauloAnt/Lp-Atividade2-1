import express from "express";

import  ulcase from './lib/ulcase.js';

const app = express();


app.post('/ulcase', (req, res) => {
    const {action, input, output} = req.body;
    const result = {
        action,
        input,
        output
    }

    res.json(result);    
});
app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
