const { Router } = require('express');
const router = Router();

let response = {
    error: false,
    code: 200,
    message: ''
};

router.get('/', function(req, res) {
    response.error = true
    response.message = 'Starting point'
    res.send(response);
});

module.exports = router;