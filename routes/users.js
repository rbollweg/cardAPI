var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/authenticate', function (req, res, next) {
    // find the user
    var name = req.body.name;

    var query = userSQLQueries.FIND_USER(name);
    var solution = '';
    users_connection_connection.query(query, function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            solution = rows;
        }
        else
            console.log('Error while performing Query.', err);
    });

    if (!user) {
        res.json({success: false, message: 'Authentication failed. User not found.'});
    } else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
            res.json({success: false, message: 'Authentication failed. Wrong password.'});
        } else {

            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, app.get('superSecret'), {
                expiresInMinutes: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        }

    }

});


module.exports = router;
