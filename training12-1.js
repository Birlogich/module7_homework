//ES5

function Creature(precedessor, iq) {
   this.precedessor = precedessor;
   this.iq = iq;
}

Creature.prototype.born = function () {
   console.log(`This one was born thanks to ${this.precedessor}`)
}

function Person(precedessor, iq, talents) {
   this.precedessor = precedessor
   this.iq = iq
   this.talents = talents
}

Person.prototype = new Creature()

const RomePerson = new Person('Creature', 200, 'building')
RomePerson.born()
console.log(RomePerson)

function Cheneese(precedessor, iq, talents, style) {
   this.precedessor = precedessor
   this.iq = iq
   this.talents = talents
   this.style = style
}

Cheneese.prototype = new Person()

const JackieChan = new Cheneese('Person', 800, 'fighting', 'kung-fu')
JackieChan.born()
console.log(JackieChan)

