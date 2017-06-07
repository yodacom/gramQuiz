const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.use(jsonParser);

router.get('/', (req, res)=>{
    res.json({
        "message":"The get person works!"
    });
});

router.post('/', (req, res)=>{
    res.json({
        "message":"The POST person works!"
    });
});

module.exports = router;

