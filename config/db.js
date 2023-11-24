import mysql from "mysql";

const db = mysql.createConnection({
    host: 'bacjgikebaj1wlamwzck-mysql.services.clever-cloud.com',
    user: 'ugjnyyg3tdf7jmqv',
    password: 'TDQFSZ7vlWyJyV72qVMU',
    database: 'bacjgikebaj1wlamwzck',
    port: 3306
})

export default db;