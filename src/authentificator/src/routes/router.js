
var express = require('express');
var router = express.Router();

// GET /
router.get('/', async (req, res, next) => {
    return res.send("working");
});

router.post('/t', async (req, res, next) => {

});

const asyncMiddleware = fn =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    };
*/

module.exports = router; 