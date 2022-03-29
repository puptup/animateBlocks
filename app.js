import { Elem } from './elem.js'
import { Demo1 } from './demo1/demo1.js'

class App extends Elem {
  constructor(parent) {
    super(parent)
    new Demo1(this.element)
  }

}

const app = new App(document.body)