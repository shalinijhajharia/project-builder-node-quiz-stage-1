const fs = require("fs");
const question = require('./question');

console.log(question())

// Writing empty array in quiz.json
fs.writeFileSync("question.json", JSON.stringify({ question : [] }))

// Fetching empty array from quiz.json
const questionJson = JSON.parse(fs.readFileSync("question.json"))

// Appending data
questionJson.question.push(question())

// Writing data into quiz.json
fs.writeFileSync("question.json", JSON.stringify(questionJson))