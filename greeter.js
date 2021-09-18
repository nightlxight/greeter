var fs = require('fs');
const yaml = require('js-yaml');
const config = yaml.load(fs.readFileSync('./configuration.yml'));


function dayTime() {
    let dayResponses = [
        "Good day!",
        "Good day ;)" //,
        // add more responses here
        // the last response should not contain a comma
    ];
    let dayResponse = dayResponses[Math.floor(Math.random() * dayResponses.length)];
    console.log(dayResponse);
}

function nightTime() {
    let nightResponses = [];
}

if (new Date().getHours() < 18) {
    dayTime();
} else {
    console.log("Good night!");
}