const { Router } = require('express');
const router = Router();

/*A number is received and a number of decimal places to 
display with lower and higher is calculated. The number of PI
is calculated with its formula and greater precision is expected 
with the variable "accurate".
By having the value of PI, its decimals are limited and it is answered.*/

let response = {
    PiCalc: ''
};

router.get('/', function (req, res) {
    var num = req.query.random_limit
    var lower = num/2
    var higher = num
    var limit =  Math.floor(Math.random() * (higher-lower) + lower)
    var accurate = 1000000 //the greater the number, the greater precision in the decimals of PI.
    var add = 0
    for ( var i=1; i<=accurate; i++ ) {
        add += 1 / ( i**2 );
    }
    var pi = Math.sqrt(add * 6);
    response.PiCalc = pi.toFixed(limit)
    res.json(response);
});

module.exports = router;