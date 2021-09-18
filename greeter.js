var fs = require('fs');
const yaml = require('js-yaml');
const config = yaml.load(fs.readFileSync('./configuration.yml'));


function day() {
    let dayResponses = [
        "Good day!",
        "Good day ;)" //,
    ];
    let dayResponse = dayResponses[Math.floor(Math.random() * dayResponses.length)];
}

if (new Date().getHours() < 18) {
    console.log("Good day!");
} else {
    console.log("Good night!");
}