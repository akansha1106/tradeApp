

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json([
    {
     "tradeId": "123",
    "tradeDate":"05-11-2019",
    "tradeAmount":"2203",
    "tradeState":"Maharashtra"
        },
        {
            "tradeId": "144",
    "tradeDate":"05-11-2019",
    "tradeAmount":"3032",
    "tradeState":"Telangana"
        },
      {
     "tradeId": "321",
    "tradeDate":"05-11-2019",
    "tradeAmount":"4876",
    "tradeState":"Orissa"
        }
        
    ]);
});

module.exports = router;