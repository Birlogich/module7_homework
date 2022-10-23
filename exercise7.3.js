//1

const getPropertyOfObj = (obj) => {
   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         console.log(key)
      }
   }
}

//2

const checkTheAttibute = (str, obj) => {
   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         return key == str ? true : false
      }
   }
}

//3

const emptyObj = Object.create(null)