
export class Elem {
  constructor(parent, tag = 'div') {
    this.element = document.createElement(tag)
    parent.append(this.element)
  }
}

