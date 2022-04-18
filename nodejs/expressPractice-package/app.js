const express = require('express');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    console.log('Home Page');
    console.log(req.originalUrl);
    res.send('Home Page');
});

app.get('/users', auth, (req, res) => {
    console.log(req.originalUrl);
    res.send('Users Page');
});

function logger(req, res, next ){
    console.log('Log');
    next(); //The next piece of middleware in line will be called to execute
}

function auth(req, res, next){
    if(req.query.admin === 'true'){
        next();
    }else{
        res.send('Auth Denied');
    }
    console.log('Auth');
}

app.listen(3000, console.log('Starting at port 3000'));

