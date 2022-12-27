const getOddAndNoOddNumbers = (x, y) => {
   for (x; x < y; x++) {
      if (x < 5) {
         if (x % 2 === 0) {
            console.log(x)
         }
      }
      if (x > 5) {
         if (x % 2 === 1) {
            console.log(x)
         }
      }
   }
}

getOddAndNoOddNumbers(0, 10)

//2

const getTheZero = () => {
   const x = prompt('Назовите число')
   if (x != 0) {
      getTheZero()
   } else {
      alert('you entered 0')
   }
}

getTheZero()