
//Question.1.
const dns = require('dns');

let givenDns = 'www.miu.edu';
dns.lookup(givenDns, (err, address) => {
    if(err) throw err;
    console.log(address);
});

//Create a web server that's going to send a response of big image (bigger then 3MB) 
//to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways)