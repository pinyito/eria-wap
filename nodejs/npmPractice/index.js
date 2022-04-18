const http = require('http');//1. import the http module
const server = http.createServer();//2. use http to create a server

// server.on('request', function(req, res){//Respond to request events
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello world!');
//     res.end();
// });

// server.listen(3000);

/*Passing a callback function to createServer is a shortcut to listening to request events*/
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hi, shortcut here!');
//     res.end();
// }).listen(3000);

/**Send out an object data */
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     let person = {
//         firstName: 'Eria Othieno',
//         lastName: 'Pinyi'
//     };
//     res.end(JSON.stringify(person));
// }).listen(3000);

/**Sending out and HTML file */
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    //get the file path
    // let htmlDoc = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    let htmlDoc = fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data)=>{
        res.end(data);
    });
    //send the response containing the HTML doc
    // res.end(htmlDoc);

}).listen(3000, console.log());

app.use(express.urlencoded({
    extended: true
}));
app.use('/add-product', (req, res, next) => { const html = `
    <!DOCTYPE html>
    <html>
    <body>
    <form action="/product" method="post">
<input type="text" name="title"><br>
      <input type="submit" value="Submit">
    </form>
    </body>
    </html>`;
    res.send(html);
});
app.use('/product', (req, res, next) => {
    console.log(req.body); // { title: 'book' }
    res.redirect('/');

});




