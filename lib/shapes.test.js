const {Circle, Triangle, Square} = require('./shapes.js')// inlcuding constructors

test('Render triangle with text "TRI", textColor: limegreen and maroon', () => {
  const triangle = new Triangle('TRI', 'limegreen', 'maroon');
expect(triangle.render).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150 1 244 182 56 182" fill="maroon" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="limegreen">TRI</text>
</svg>`);
});

test('Render circle with text "CIR", textColor black and shapeColor red', () => {
  const circle = new Circle('CIR', 'black', 'red');
expect(circle.render).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="red" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">CIR</text>
</svg>`);
});

test('Render square with text "SQU", textColor yellow and shapeColor black', () => {
    const square = new Square('SQU', 'yellow', 'black')
  expect(square.render).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="20" width="175" height="175" fill="black"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">SQU</text>
</svg>`)
})