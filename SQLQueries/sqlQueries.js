/**
 * Created by The Gibs on 9/29/2015.
 */
//This is pretty much an enum of availible SQL queries
global.sqlQueries = {
    ADD_USER: function create_query(account_name, account_money, account_num_points) {
        return "INSERT INTO accounts (account_name, account_money, account_num_points) VALUES ('" + account_name + "','" + account_money + "','" +  account_num_points+ "');"
    },
    GET_ALL_USERS: "SELECT * FROM accounts.accounts;"
}

