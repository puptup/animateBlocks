import { Elem } from './elem.js'

export class Block extends Elem {
  constructor(parent) {
    super(parent)
    this.element.classList.add('block')
  }

  animate() {
    return new Promise((resolve) => {
      this.element.ontransitionend = () => {
        resolve(null)
      }
      this.element.classList.add('blockActive')
    }
    )
  }
}