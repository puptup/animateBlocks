import { Elem } from './elem.js'
import { Block } from './block.js'

class App extends Elem {
  constructor(parent) {
    super(parent)
    this.element.classList.add('blockContainer')
    this.blocks = []
    for (let i = 0; i < 10; i++) {
      this.blocks.push(new Block(this.element))
    }
    this.queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    setTimeout(() => {
      this.animate(this.queue).then(() => {
        console.log('Animation done!')
      })
    }, 1000)
  }

  animate(arr) {
    return new Promise(resolve => {
      const rec = (index) => {
        if (index == arr.length) {
          resolve()
          return
        }
        this.blocks[index].animate().then(() => { rec(index + 1) })
      }
      rec(0)
    })
  }
}

const app = new App(document.body)