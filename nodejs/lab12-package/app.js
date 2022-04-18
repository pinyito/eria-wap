/**
 * Question.1.
 * -npm project created
 * -Express.js installed
 * -nodemon installed globally
 */
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.port || 4000;

/**
 * Question.2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
 */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-pages', 'index.html'), 'utf8');
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-pages','users.html'), 'utf8');
});
app.post('/users/register', (req, res) => {
    res.send("Posting here...");
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'web-pages','products.html'), 'utf8');
});
app.post('/products/submit', (req, res) => {
    res.send('Posting products...');
});


app.listen(port);

