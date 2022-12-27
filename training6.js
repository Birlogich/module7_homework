const match = (str1, str2) => {
   const str1ToLowerCase = str1.toLowerCase()
   const str2ToLowerCase = str2.toLowerCase()
   return str1ToLowerCase == str2ToLowerCase ? true : false
}

match('hEllO', 'HELLo')

//2

const redditSubLink = (str, link) => {
   const sharedLink = str.split('/r/')
   return sharedLink[0] + /r/ + link
}

redditSubLink('https://reddit.com/r/название_раздела/', 'beerlogich')

//3

const calculate = (arr) => {
   return arr
      .map(item => item % 2 == 0 ? item + 4 : item - 2)
      .filter(item => item % 13 != 0)
      .reduce((a, b) => a + b, 0)
}

calculate([15, 2, 3, 5, 6])

//4

const transformUpvotes = (arr) => {
   const modArr = []
   for (i of arr) {
      if (i.includes('k')) {
         const modI = i.slice(0, -1) * 1000
         modArr.push(modI)
      } else {
         modArr.push(+i)
      }
   }
   return modArr
}

transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k'])