var error = require('http-errors');
var dbCnf = require('./config');
let username = dbCnf.user;
let password = dbCnf.password;
let host = dbCnf.host;
let dbName = dbCnf.dbname;
let port = dbCnf.port;

const initOptions = {
    query(e) {
        console.log('QUERY:', e.query);
    },
    capSQL: true,
    // global event notification;
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            //
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};

var pgp = require('pg-promise')(initOptions);
var db = pgp(`postgres://${username}:${password}@${host}:${port}/${dbName}`);


// connection database


// tests connection and returns Postgres server version,
// if successful; or else rejects with connection error:
db.connect()
    .then(obj => {
        // Can check the server version here (pg-promise v10.1.0+):
        const serverVersion = obj.client.serverVersion;


        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });






module.exports = db;