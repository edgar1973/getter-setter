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
  set name(value) {
    Object.defineProperty(this, '__name', { writable: true });
    this.__name = value;
    Object.defineProperty(this, '__name', { writable: false });
  },
  get gender() {
    return this.__gender;
  },
  set gender(value) {
    Object.defineProperty(this, '__gender', { writable: true });
    if (value === 'male' || value === 'female' || value === 'non-binary' || value === 'non-binary' || value === 'transgender' || value === 'Intersex' || value === 'n/a') {
      this.__gender = value;
    } else {
      console.log('ERROR');
    }
    Object.defineProperty(this, '__gender', { writable: false });
  },
  get age() {
    return this.__age;
  },
  set age(value) {
    Object.defineProperty(this, '__age', { writable: true });
    if (value > 0 && value < 120) {
      this.__age = value;
    } else {
      console.log('ERROR');
    }
    Object.defineProperty(this, '__age', { writable: false });
  }
}

Object.defineProperties(person, {
  '__name': {
    value: name,
    writable: false,
  },
  '__age': {
    value: age,
    writable: false,
  },
  '__gender': {
    value: gender,
    writable: false,
  },
});

person.__name = '11111';
person.gender = 'female';

console.log(person.name);
console.log(person.__name);
console.log(person.__gender);