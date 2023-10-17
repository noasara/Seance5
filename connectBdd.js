import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mysql = require('mysql2');
const express = require('express');
const path = require('path');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'nodeJs',
    password : 'test',
    database : 'nodemysql'
});

const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded())