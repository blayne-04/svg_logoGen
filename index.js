const fs = require('fs')
const questions = require('./lib/userInput')// including questions for prompt
const {Shape} = require('./lib/shapes')// inlcuding constructors
const inquirer = require('inquirer')//including inquirer

inquirer.prompt(questions)
.then((res) =>{ 
    switch(res.shape){
        case 'Circle':
            fs.writeFile(`circle.svg`,`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${res.logoColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${res.textColor}">${res.text}</text>
          
          </svg>`, (err) => {
            if(err){
                console.log(err)
            }
            })
        }
})