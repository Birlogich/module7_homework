const countDown = (n) => {
   while (n > 1) {
      n--
      console.log(n)
   }
}

countDown(5)

//2

const repeatWord = (word, count) => {
   let str = '';
   for (i = 1; i <= count; i++) {
      str += word + i + ', ';
   }
   return str
}

repeatWord('слово', 3)

//3

function createAdder(a) {
   return function addA(b = 5) {
      return a + b;
   }
}

const add5 = createAdder(5);
alert(add5(5)) // Должно получиться 10
alert(add5(12)) // Должно получиться 17