const config = require('config');
const mysql = require('mysql'); // https://www.npmjs.com/package/mysql

const dbConfig = config.get('dbConfig');

const errConnect = (err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
}

// Global variable to save db records and not perform queries all the time since db is static
dbColors = null

const dbModule = {
    getOhmRange: (cbErr, cbSuccess) => {
        if (dbColors !== null) {
            return
        }
        let connection = mysql.createConnection(dbConfig.mysqlConfig);
        connection.connect(errConnect);
        const queryFilter = (error, results, _fields) => {
            if (error) {
                cbErr(error)
                return
            }
            dbColors = results
            cbSuccess(results)
        };
        connection.query(dbConfig.querys.ohmRange, queryFilter);
        connection.end();
    },
    getBandRow: (bandColor) => {
        found = dbColors.find(row => row.color === bandColor.toLowerCase())
        return found
    }
}

module.exports = dbModule