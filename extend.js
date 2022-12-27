class Component {
   constructor(selector) {
      this.$el = document.querySelector(selector)
   }

   hide() {
      this.$el.style.display = 'none'
   }

   show() {
      this.$el.style.display = 'block'
   }
}

class Box extends Component {
   constructor(options) {
      super(options.selector)

      this.$el.style.width = this.$el.style.height = options.size + 'px'
      this.$el.style.background = options.background
   }
}

const box1 = new Box({
   selector: '#box1',
   size: 100,
   background: 'red'
})

box1.show()