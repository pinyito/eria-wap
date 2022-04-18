const express = require('express');
const app = express();
app.use(express.json());

const bookRouter = require('./routes/bookRouter');
app.use(bookRouter);

app.listen(3000);