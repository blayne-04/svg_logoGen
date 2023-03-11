const inquirer = require('inquirer')//including inquirer

const validHex = /^#([0-9A-F]{3}){1,2}$/i;//Regex for hexidecimal values
const validCK = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue",
"chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki",
"darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet",
"deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey",
"green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan",
"lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue",
"lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue",
"mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange",
"orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown",
"royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan",
"teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];// List of all of the valid color keywords
//function for validating color
const validateColor = (input) => {
    if (validHex.test(input) || validCK.includes(input.toLowerCase())) {
      return true;
    } else {
      return 'Please enter your color as a hex value or color keyword';
    }
  };

//questions to iterate through
const questions = [
    {
      type:'input',
      name:'text',
      message: 'Enter up to 3 characters for text',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        } else {
          return 'You may only enter 3 characters or less';
        }
      }
    },
    {
        type:'input',
        name:'textColor',
        message: 'Enter the desired color of your text as a keyword or hexidecimal value (#xxxxxx)',
        validate: validateColor,
    },
    {
        type:'input',
        name:'logoColor',
        message: 'Enter the desired color of your logo as a keyword or hexidecimal value (#xxxxxx)',
        validate: validateColor,
    },
    {
        type:'list',
        name:'shape',
        choices: ['Square','Triangle','Circle']
    }
  ];
  
  inquirer.prompt(questions).then(answers => {
    module.exports = answers
    console.log(answers)
  });
