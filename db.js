const mysql = require('mysql2');

const dotenv = require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'testdb2',
    user: 'alien',
    password: process.env.password
});

function getAllPersons() {
    return new Promise((resolve,reject) => {
        connection.query(
            `SELECT * from person;`,
            (err,rows,cols) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(rows)
                }
            }
        )
    });
}

function addPerson(name,age,place) {
    return new Promise((resolve,reject) => {
        connection.query(`INSERT INTO person(name,age,place)
        VALUES (?,?,?)`,
        [name,age,place],
        (err,results) => {
            if(err) {
                reject(err);
            }
            else
            {
                resolve();
            }
        })
    })
}

exports = module.exports = {
    getAllPersons,
    addPerson
}