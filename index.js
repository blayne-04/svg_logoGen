const fs = require('fs')
const questions = require('./lib/userInput')// including questions for prompt
const {Circle, Triangle, Square} = require('./lib/shapes')// inlcuding constructors
const inquirer = require('inquirer')//including inquirer

inquirer.prompt(questions)
.then((res) =>{ 
    switch(res.shape){
        case 'Circle':
            const circle = new Circle(res.text, res.textColor, res.logoColor)
                fs.writeFile(`examples/${res.fileName}.svg`, circle.render, (err) => {
                    err ? console.log(err) : console.log(`Created ${res.fileName}.svg!`)
            });
            break;
        case 'Triangle':
            const triangle = new Triangle(res.text, res.textColor, res.logoColor)
                fs.writeFile(`examples/${res.fileName}.svg`, triangle.render, (err) => {
                    err ? console.log(err) : console.log(`Created ${res.fileName}.svg!`)
            })
            break;
        case 'Square':
            const square = new Square(res.text, res.textColor, res.logoColor)
                fs.writeFile(`examples/${res.fileName}.svg`, square.render, (err) => {
                    err ? console.log(err) : console.log(`Created ${res.fileName}.svg!`)
            })
            break;
        default: console.log('No parameters given')
    }
})