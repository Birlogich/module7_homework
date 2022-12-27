//1

const Pifagor = (a, b, c) => {
   if ((a ** 2 + b ** 2) === c ** 2) {
      console.log('Квардат прямоугольный')
   } else {
      console.log('Квардат не прямоугольный')
   }
}

Pifagor(5, 5, 25)

//2 
const getMaxFigure = (a, b, c) => {
   const arrFromFig = [a, b, c]
   return arrFromFig.sort((a, b) => b - a)[0]
}
getMaxFigure(1, 2, 12)