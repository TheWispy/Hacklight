var path = require('path');
var express = require('express');
var router = express.Router();

router.use('/dist', express.static(
    path.resolve(__dirname + '/../../dist')
));
router.get('/', (req, res, next) => {
    res.sendFile('index.html', {
        root: './'
    });
});

module.exports = router;
