// https://expressjs.com/en/guide/using-middleware.html#middleware.application

var express = require('express');
var app = express();

// app.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     res.send('USER Time');
// })

// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type:', req.method);
//     res.send('USER Request');
// })

// app.get('/user/:id', function (req, res, next) {
//     console.log('Request Type:', req.method, req.params.id);
//     res.send('USER');
// })

// app.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl);
//     next();
// }, function (req, res, next) {
//     console.log('req.params.id:', req.params.id);
//     res.send('USER2');
// })

// app.get('/user/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route');
//     // otherwise pass the control to the next middleware function in this stack
//     else next();
// }, function (req, res, next) {
//     // send a regular response
//     res.send('regular')
// })

// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', function (req, res, next) {
//     res.send('special')
// })

function logOriginalUrl(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}

function logMethod(req, res, next) {
    console.log('Request Type:', req.method);
    next();
}

var logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
    res.send('User Info');
})

// start server
const port = 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});