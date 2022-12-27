
const getInfo = (arr) => {
   const ages = arr.map(person => person.age)
   const sumOfAges = ages.reduce((a, b) => a + b, 0)
   const oldestPerson = arr.reduce((acc, curr) => acc.age > curr.age ? acc : curr)
   return { middeage: sumOfAges, oldestOne: oldestPerson.name }
}

getInfo([
   {
      name: 'Kaya',
      age: 10,
   },
   {
      name: 'Vitya',
      age: 20,
   },
   {
      name: 'Kolya',
      age: 30,
   }
])

const fromEntries = (arrs) => {
   const obj = {};
   arrs.forEach(arr => {
      obj[arr[0]] = arr[1];
      console.log(arr)
   })
   return obj;
}

fromEntries([
   ['key2', 3],
   ['key1', 'hello'],
])

const countChars = (str) => {
   const obj = {}
   for (i of str) {
      const lowerCase = i.toLowerCase()
      console.log(lowerCase)
      if (obj[lowerCase] === undefined) {
         obj[lowerCase] = 0
      }
      ++obj[lowerCase]
   }
   return obj
}

countChars('Арарат')