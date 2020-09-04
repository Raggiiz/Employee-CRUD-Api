/**
 * Arquivo responsável pelas'connectionStrings'
 */

const { Pool } = require('p');
const dotenv = require('dotenv');
const { text } = require('express');

dotenv.config();

// => Conexão do banco de dados
const pool = new pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client)=> {
    console.log('Unexpected error on idle');
    process.exit(-1);
});

pool.on('connect', ()=> {
    console.log('Base de dados conectado com sucesso!')
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
