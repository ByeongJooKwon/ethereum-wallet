/*let Datastore = require('nedb');*/
let Wallet = require('./wallet.class');
var mysql = require('mysql');


class Database {

    constructor(name) {
/*        this.db = new Datastore({ filename: `./db/${name}.db`, autoload: true });*/

	
	this.db = mysql.createConnection({
		host : '45.119.145.123',
		user : 'samadal',
		password : 'samadal',
		port : 3306,
		database : 'projectM'
	});
	this.db.connect();
	
    }

    find(q) {
        return new Promise((res, rej) => {
	/*   
            this.db.find(q || {}, (err, docs) => {
                if (err) rej(err);
                res(docs);
            });
	   */
	this.db.query('SELECT * FROM wallets', function(err, rows, fields) {
		if (!err)
		  res(rows);
		else
		  console.log('Errors : ', err);		
	});
	/* this.db.end(); */

        });
    }
    txidview(obj) {
	return new Promise((res, rej) => {
		this.db.query("", function(err, rows, result) {
			console.log('txid inserted!');
			console.log(rows);
		});
	});
    }
    insert(obj) {
        return new Promise((res, rej) => {
/*
            this.db.insert(obj, (err) => {
                if (err) rej(err);
                res();
            });
*/
	this.db.query("INSERT INTO wallets (name, address, wif, network, password) VALUES ('"+obj.name+"', '"+obj.address+"', '"+obj.wif+"', '"+obj.network+"', '"+obj.password+"')", function(err, rows, result) {
		if (err) console.log(err);
		console.log('1 record inserted!');
		console.log(rows);
	});
	this.db.end();
        });
    }
/*
    remove(q) {
        return new Promise((res, rej) => {
            this.db.remove(q, (err) => {
                if (err) rej(err);
                res();
            });
        });
    }
*/

}

module.exports = Database;
