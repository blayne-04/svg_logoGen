const questions = require('./lib/userInput')// including questions for prompt
const {Shape} = require('./lib/shapes')// inlcuding constructors
const inquirer = require('inquirer')//including inquirer

inquirer.prompt(questions)
.then((res) =>{ 
const shape = new Shape(res.text, res.textColor, res.logoColor)
console.log(shape);
})