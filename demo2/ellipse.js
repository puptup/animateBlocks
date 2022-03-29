export class Ellipse {
  constructor(context, centX, centY, radius) {
    this.context = context;
    this.centX = centX;
    this.centY = centY;
    this.radius = radius;
  }

  render(color) {
    this.context.beginPath();
    this.context.ellipse(this.centX, this.centY, this.radius, this.radius, 0, 0, 2 * Math.PI);
    this.context.fillStyle = color;
    this.context.fill();
    this.context.closePath();
  }

  inShape(cursorX, cursorY) {
    return (
      (this.centX - cursorX) ** 2 + (this.centY - cursorY) ** 2 <=
      this.radius ** 2
    )
  }
}
