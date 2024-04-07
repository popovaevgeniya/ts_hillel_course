interface IFigure {
  readonly color: string;
  readonly name: string;
  calculateArea(a: number, b?: number): number;
}

class Circle implements IFigure {
  readonly color = 'red';
  readonly name = 'Circle';
  calculateArea(r: number): number {
    return r * r * 3.1;
  }
}

class Rectangle implements IFigure {
  readonly color = 'green';
  readonly name = 'Rectangle';
  calculateArea(side1: number, side2: number): number {
    return side1 * side2;
  }

  print(side1: number, side2: number): string {
    return `S = ${side1} * ${side2} = ${this.calculateArea(side1, side2)}}`;
  }
}

class Square implements IFigure {
  readonly color = 'yellow';
  readonly name = 'Square';
  calculateArea(side: number): number {
    return side * side;
  }

  print(side: number): string {
    return `S = ${side} * ${side} = ${this.calculateArea(side)}}`;
  }
}

class Triangle implements IFigure {
  readonly color = 'blue';
  readonly name = 'Triangle';
  calculateArea(side: number, height: number): number {
    return 0.5 * (side * height);
  }
}
