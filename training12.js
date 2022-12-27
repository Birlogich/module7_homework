/* const accordions = document.querySelectorAll('.accordion');

const hiddenPanel = (element) => {
   const button = element.querySelector('.header');
   const panel = element.querySelector('.panel');
   button.addEventListener('click', function () {
      panel.classList.toggle('hidden')
   })
}

accordions.forEach(accordeon => hiddenPanel(accordeon))


//Кнопка

const random = (min, max) => {
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const button = document.querySelector('.button')

const flyButton = (el) => {

   el.addEventListener('mouseenter', () => {
      el.style.left = `${random(10, 90)}%`
      el.style.top = `${random(10, 90)}%`
   })
} */

/* flyButton(button) */

//Screen width

const widthButton = document.querySelector('.widthbutton')

const manageWidth = () => {
   const currentWidth = window.innerWidth
   widthButton.innerHTML = `Ширина экрана ${currentWidth} пикселей`
}

manageWidth()

window.addEventListener('resize', manageWidth)



const random = (min, max) => {
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const productNames = [
   'Орехи', 'Морковь', 'Спаржа', 'Печенье', 'Наушники', 'Молоко',
   'Сок', 'Контейнер', 'JS-разработчик', 'Прямые руки', 'Водка',
];
const getRandomProductName = () => {
   return productNames[random(0, productNames.length - 1)];
};
const getRandomPrice = () => random(300, 10000);

const serverMock = (latency, cb) => {
   const products = Array.from({ length: random(5, 10) })
      .map(() => ({
         name: getRandomProductName(),
         price: getRandomPrice(),
      }));

   setTimeout(() => {
      cb(products);
   }, latency)
};

serverMock(3000, (products) => {
   console.log(products);
});