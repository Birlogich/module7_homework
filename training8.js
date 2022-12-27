const counter = (from, to) => {
   let current = from
   setTimeout(function go() {
      console.log(++current)
      if (current < to) {
         setTimeout(go, 1000)
      }
   }, 1000)
}

counter(0, 10)