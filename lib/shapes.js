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
        this.render = ``
    }

}
module.exports = {Shape}