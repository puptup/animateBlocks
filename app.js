import { Elem } from './elem.js'
import { Demo2 } from './demo1/demo2.js'

class App extends Elem {
  constructor(parent) {
    super(parent)
    new Demo2(this.element)
  }
}

const app = new App(document.body)