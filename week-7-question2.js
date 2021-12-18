class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  getColor() {
    return this.color;
  }

  getArea() {
    return 2 * Math.PI * Math.pow(this.area, 2);
  }

  getCircumference() {
    return this.radius * 2 * Math.PI;
  }

  toString() {
    return `Circle [radius = ${this.radius} , color = ${this.color}]`;
  }
}

const circle = new Circle(2.0, "blue");

console.log(circle);
