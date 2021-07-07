const name = 'Edgar';
const age = 23;
const gender = 'male';

const person = {
  __name: name,
  __age: age,
  __gender: gender,
  get name() {
    return this.__name;
  },
  set name(value){
    this.__name = value;
  },
  get gender() {
    return this.__gender;
  },
  set gender(value) {
    if (value === 'male' || value === 'female' || value === 'non-binary' || value === 'non-binary' || value === 'transgender' || value === 'Intersex' || value === 'n/a') {
      this.__gender = value;
    } else {
      console.log('ERROR');
    }
  },
  get age() {
    return this.__age;
  },
  set age(value) {
    if (value > 0 && value < 120) {
      this.__age = value;
    } else {
      console.log('ERROR');
    }
  }
}

person.age = 1200;
person.gender = 'dsfg';
console.log(person);
person.name = 'Vasiliy';
person.age = 25;
person.gender = 'male';
console.log(person);
