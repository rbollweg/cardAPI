/**
 * Created by The Gibs on 9/29/2015.
 */
//This is pretty much an enum of availible SQL queries
global.accountSQLQueries = {
    ADD_USER: function create_query(account_name, account_money, account_num_points) {
        return "INSERT INTO accounts.accounts (account_name, account_money, account_num_points) VALUES ('" + account_name + "','" + account_money + "','" + account_num_points + "');"
    },
    UPDATE_USER: function create_query(account_id, account_name, account_money, account_num_points) { //I think using the primary key is the norm?
        return "UPDATE accounts.accounts SET account_name='" + account_name + "'," + "account_money='" + account_money + "'," + "account_num_points='" + account_num_points + "' WHERE account_id='" + account_id + "';"
    },
    GET_ALL_USERS: "SELECT * FROM accounts.accounts;"

}

global.userSQLQueries = {
    FIND_USER: function create_query(username) {
        return "SELECT * FROM  users.user WHERE username='" + username + "';"
    },
    ADD_USER: function create_query(username, password, email) {
        return "INSERT INTO  users.user (username, password, email) VALUES ('" + username + "','" + password + "','" + email + "');"
    },
    GET_ALL_USERS: "SELECT * FROM  users.user;"

}
