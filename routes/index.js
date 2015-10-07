var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/accounts', function (req, res, next) {
    var query = accountSQLQueries.GET_ALL_USERS;
    accounts_connection.query(query, function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            res.render('accounts', {title: 'Accounts', rows: rows});
        }
        else
            console.log('Error while performing Query.', err);
    });


});



router.post('/new', function (req, res, next) {
    var query = accountSQLQueries.ADD_USER(req.body.name, req.body.money, req.body.points);
    accounts_connection.query(query, function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
        }
        else
            console.log('Error while performing Query.', err);
    });


});

router.post('/update', function (req, res, next) {
    var query = accountSQLQueries.UPDATE_USER(req.body.id, req.body.name, req.body.money, req.body.points);
    accounts_connection.query(query, function (err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
        }
        else
            console.log('Error while performing Query.', err);
    });


});

module.exports = router;
