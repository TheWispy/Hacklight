const path = require('path');
const express = require('express');
const router = express.Router();

router.use('/dist', express.static(
    path.resolve(__dirname + '/../../dist')
));

router.get('/', (req, res, next) => {
    res.sendFile('index.html', {
        root: './'
    });
});

module.exports = router;
