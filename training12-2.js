class Creature {
   constructor(precedessor, iq) {
      this.precedessor = precedessor;
      this.iq = iq;
   }
   born() {
      console.log(`This one was born thanks to ${this.precedessor}`)
   }
}

class Person extends Creature {
   constructor(precedessor, iq, talents) {
      super(precedessor, iq)
      this.talents = talents
   }
}

const RomePerson = new Person('Creature', 200, 'building')
RomePerson.born()
console.log(RomePerson)

class Cheneese extends Person {
   constructor(precedessor, iq, talents, style) {
      super(precedessor, iq)
      this.talents = talents
      this.style = style
   }
}

const JackieChan = new Cheneese('Person', 800, 'fighting', 'kung-fu')
JackieChan.born()
console.log(JackieChan)