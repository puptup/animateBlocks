import { Elem } from "../elem"

export class Demo2 extends Elem {
  constructor(parent) {
    super(parent)
    const newElement = document.createElement('canvas')
    this.element.append(newElement)
  }
}
