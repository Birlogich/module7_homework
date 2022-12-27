//1

const getInfo = () => {
   let firstName = prompt('Твое имя?')
   let secondName = prompt('Твоя фамилия?')
   if (typeof firstName != String && typeof secondName != String) {
      alert('Enter the number')
   } else {
      alert(`Твое имя - ${firstName}, твоя фамилия - ${secondName}`)
   }
}
getInfo()


//2

const convertTemp = (celsius) => {
   return console.log(`${celsius} градусов по Цельсию равны ${(celsius * 9 / 5) + 32} градусам по Фаренгейту.`)
}
convertTemp(10)

//3

const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
const RENT = 40000
const FOOD = 15000
const OTHER = 15000
const MY_SALARY = 120000

const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')