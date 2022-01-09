const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'pass123',
    database: 'postgres'
});

pgclient.connect();

const addExtenntion = 'CREATE EXTENSION "uuid-ossp";'


pgclient.query(addExtenntion, (err, res) => {
    if (err) throw err
});
