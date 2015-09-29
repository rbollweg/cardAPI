var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/accounts', function (req, res, next) {
    var query = sqlQueries.GET_ALL_USERS;
    connection.query(query, function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            res.render('accounts', {title: 'Accounts', rows: rows});
        }
        else
            console.log('Error while performing Query.', err);
    });


});

router.post('/newaccount', function (req, res, next) {
    var query = sqlQueries.ADD_USER(req.body.name, req.body.money, req.body.points);
    connection.query(query, function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
        }
        else
            console.log('Error while performing Query.', err);
    });


});

module.exports = router;
