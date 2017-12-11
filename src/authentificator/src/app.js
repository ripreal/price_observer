// https://medium.com/of-all-things-tech-progress/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359
const UserService = require('./repo/userService');
const express = require('express');
const app = express();
const userSettings = require('../../userSettings.json');
const UsersRepo = require('./repo/usersRepo');

// include routes
var routes = require('./routes/router');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

// listen on port 3001
app.listen(3001, function () {
    console.log('Express app listening on port 3000');
});

async function test() {
    let repo = new UsersRepo();
    await repo.put("");
    let t1= "";
}
test();