var express = require('express');
var app = express();
var router = express.Router();

const fs = require('fs');

// a middleware function with no mount path. This code is executed for every request to the router
// router.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     res.send('USER');
// })

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl);
//     next();
// }, function (req, res, next) {
//     console.log('Request Type:', req.method);
//     res.send('USER');
// })

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route');
    // otherwise pass control to the next middleware function in this stack
    else next();
}, function (req, res, next) {
    // render a regular page
    res.send('regular');
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send('special');
})

// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
    res.sendStatus(401);
})

app.get('/file', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) {
            next(err); // Pass errors to Express.
        } else {
            res.send(data);
        }
    })
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

// mount the router on the app
app.use('/', router);

// start server
const port = 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});