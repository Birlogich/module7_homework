const productNames = [
   'Орехи', 'Морковь', 'Спаржа', 'Печенье', 'Наушники', 'Молоко',
   'Сок', 'Контейнер', 'JS-разработчик', 'Прямые руки', 'Водка',
];

const random = (min, max) => {
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const getRandomProductName = () => random(0, 300)
const getRandomProductPrice = () => {
   return productNames[random(0, productNames.length - 1)]
}

const serverMock = (latency, cb) => {
   const products = Array.from({ length: random(5, 10) })
      .map(() => ({
         name: getRandomProductName(),
         price: getRandomProductPrice(),
      }))
   setTimeout(() => {
      cb(products);
   }, latency)
}

serverMock(3000, (grocery) => console.log(grocery));

//2
const LATENCY = 400;

const productsById = {
   0: { name: 'Орехи', rackId: 1 },
   1: { name: 'Морковь', rackId: 1 },
   2: { name: 'Спаржа', rackId: 1 },
   3: { name: 'Печенье', rackId: 2 },
   4: { name: 'Наушники', rackId: 2 },
   5: { name: 'Молоко', rackId: 2 },
   6: { name: 'Сок', rackId: 1 },
   7: { name: 'Контейнер', rackId: 1 },
   8: { name: 'JS-разработчик', rackId: 1 },
   9: { name: 'Прямые руки', rackId: 2 },
   10: { name: 'Водка', rackId: 2 },
};
