const random = (min, max) => {
   const rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
};

const colors = ['blue', 'cyan', 'red', 'green', 'yellow']

const getColor = (arr) => {
   return arr[random(0, arr.length - 1)]
}

const listOfItems = document.querySelectorAll('.list__item')
for (item of listOfItems) {
   item.style.color = getColor(colors)
}


const removeDivs = html => {
   const root = document.createElement('span')
   root.innerHTML = html;
   const divs = root.querySelectorAll('div')
   divs.forEach(div => {
      div.parentNode.removeChild(div)
   });
   return root.innerHTML
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert(removeDivs(html));
alert(removeDivs(html) === 'Hello <b>World!</b>');