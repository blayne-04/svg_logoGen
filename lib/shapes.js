class Shape {
    constructor(text, textColor, logoColor){
        this.text = text;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }
}
class Circle extends Shape{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor)
        this.render = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}
class Triangle extends Shape{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor)
        this.render = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150 1 244 182 56 182" fill="${this.logoColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}
class Square extends Shape{
    constructor(text, textColor, logoColor){
        super(text, textColor, logoColor)
        this.render = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="20" width="175" height="175" fill="${this.logoColor}"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}
module.exports = {Circle, Triangle, Square}