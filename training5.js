const sayHello = (name = 'Иван', surname = 'Иванов', age = 10, greeting = 'Привет') => {
   return `${greeting} ${name} ${surname}, тебе ${age} лет! `
}

alert(sayHello('Дима'));