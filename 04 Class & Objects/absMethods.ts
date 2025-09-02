abstract class Shape {
  abstract area(): number; // only rule, no body
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area()); // 78.54
