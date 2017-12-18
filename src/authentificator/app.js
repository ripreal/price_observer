// Include the cluster module
var cluster = require('cluster');
const express = require('express');
const app = express();
const userSettings = require('./userSettings.json');
const bodyParser = require('body-parser');
const UsersRepo = require('./src/repo/usersRepo');
const UserService = require('./src/repo/userService');
const APP_PROFILES = require('./src/constants/appProfiles');

// Code to run if we're in the master process
/*
if (cluster.isMaster) {//

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
*/
    // include routes
    let routes = require('./src/routes/router');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', routes);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Unknow server error');
        err.status = 404;
        next(err);
    });

    // error handler
    // define as the last app.use callback
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.message);
    });

    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log('Express app listening on port 3000');
    });

    testAsync();
//}

async function  testAsync() {

    let repo = new UsersRepo(APP_PROFILES.TEST);
    try {
        await repo.deleteUsersTable();
    } catch(error) {
        console.log(error.message);
    }

    // TEST TABLE

        try {
            await repo.createSheme();
        } catch (error) {
            console.log(error);
            expect(error).toBeNull();
    }
        
    
    let uService = new UserService(repo);
    
    let userData = uService.emptyUser();
    userData.username = 'ripreal';
    userData.email = 'mail@host.ru';
    userData.password = '12345';
    userData.passwordconf   = '12345';

    // TEST PUT

    try {
        await uService.createUser(userData);
    } catch (error) {
        console.log(error);
        expect(error).toBeNull();
    }

    // TEST GET

    let user = null;
    try {
        user = await uService.authenticate(userData.email, userData.password);
      //  expect(user.username).toBe(userData.username);
    } catch (error) {
        console.log(error);
      //  expect(error).toBeNull();
    }

    // TEST AUTHENTIFICATE 

    try {
        let authentificated = uService.authentificated(user.token);
      //  expect(user.username).toBe(userData.username);
    } catch (error) {
        console.log(error);
      //  expect(error).toBeNull();
    }
    
    let  authentificated = uService.authentificated(user.token);
   //s expect(authentificated).toBe(true);

    // TEST DELETE 
    
    try {
        await uService.delete(userData.email);
    } catch (error) {
        console.log(error);
   //     expect(error).toBeNull();
    }

}