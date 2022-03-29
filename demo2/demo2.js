import { Elem } from "../elem.js"
import { Ellipse } from "./ellipse.js"

export class Demo2 extends Elem {
  constructor(parent) {
    super(parent, "canvas");
    this.element.width = 1200;
    this.element.height = 800;

    const context = this.element.getContext("2d");
    context.fillStyle = "#000";
    context.fillRect(0, 0, this.element.width, this.element.height);

    this.ellArray = [];

    for (let index = 0; index < 10; index++) {
      this.ellArray.push(new Ellipse(context, 100 + index * 25, 50, 25));
    }

    this.ellArray.forEach(ell => {
      ell.render("#fff");
    })


    // const ell = new Ellipse(context, 100, 50, 25);
    // const ell1 = new Ellipse(context, 125, 75, 25);
    // ell.render("#fff");
    // ell1.render("#fff");

    this.element.onmousemove = event => {
          this.ellArray.forEach(ell => {
      ell.render(ell.inShape(event.offsetX, event.offsetY) ? "#0ff" : "#f0f");
    })
    }
  }
}
