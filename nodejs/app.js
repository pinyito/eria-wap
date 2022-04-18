
const hello1 = require('./start');
hello1();

const hello2 = require('./start').greet;
hello2();

const hello3 = require('./start');
hello3.greet();
