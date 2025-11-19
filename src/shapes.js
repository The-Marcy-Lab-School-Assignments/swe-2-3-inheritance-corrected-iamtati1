/* eslint-disable max-classes-per-file */

class Shape {
  constructor(type) {
    this.type = type
  }

  getArea() {
    return 0;
  }
}
const myShape = new Shape('blob');
console.log(myShape.type); // blob
console.log(myShape.getArea()); // 0

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius

  }

  getArea() {
    return Math.PI * (this.radius ** 2)
  }
}

const myCircle = new Circle(10);
console.log(myCircle.type); // Circle
console.log(myCircle.radius); // 10
console.log(myCircle.getArea()); // 314.15927....

class Rectangle extends Shape {
  constructor(length, width) {
    super("Rectangle")
    this.length = length
    this.width = width
  }

  getArea() {
    return (this.length * this.width)
  }
}
const myRectangle = new Rectangle(4, 3);
console.log(myRectangle.type); // Rectangle
console.log(myRectangle.length); // 4
console.log(myRectangle.width); // 3
console.log(myRectangle.getArea()); // 12

class Square extends Rectangle {
  constructor(side) {
    super(side, side);     // required by the test
    this.type = "Square";  // fix instance-creation test
  }
}

const mySquare = new Square(5);
console.log(mySquare.type); // Square
console.log(mySquare.length); // 5
console.log(mySquare.width); // 5
console.log(mySquare.getArea()); // 25

module.exports = {
  Shape,
  Circle,
  Rectangle,
  Square,
};
