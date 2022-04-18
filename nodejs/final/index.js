/**
 * NPM and Modules
 * Structure of a NodeJS Project:
 *      -Local Project > Own code > Core Node Packages > Dependencies(3rd Party)
 * Dependencies are installed and manages via npm (Node Package Manager)
 * www.npmjs.com hosts thousands of free packages to download and use
 * What is a package? A collection of files that make up a module
 * What is a module?
 * -Contents of a package
 *      -JS files
 *      -package.json
 *      -package-lock.json (may be)
 * 
 * ===>npmPractice Project
 * -package.json is a manifest for your nodeJS project
 *      -it is a central repository of configurations for installed packages
 * -Semantic versioning: major_version.minor_version.patch_version
 *      -update the major version number when you make incompatible API chnages in the new release
 *      -update minor version when you add functionality in a backward-compatible manner
 *      -update patch version when you make backward-compatible bug fixes
 * 
 * HTTP
 * -Node started as web server and evolved over the time into a much more genralized framework
 * -Sending out and HTML file
 */
//Lab 11 solution to Question 2
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    let jsObj = {
        firstname: 'Eria',
        lastname: 'Pinyi',
        age: 33
    };

    let jsonObj = `{
        "firstname": "Eria",
        "lastname": "Pinyi",
        "age": "33"
    }`; 

    console.log(JSON.parse(jsonObj));

}).listen(3000, console.log('Listening at 450'));