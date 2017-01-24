const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// CONSOLE-ing
// Interpolated
var name = "World";
console.log('Hello %s', name);

// Styled
console.log('%c some styled text here', 'font-size:12px;background:green');

// warning!
console.warn('uh oh!');

// Error :|
console.error('error');

// Info
console.info('informing you here:');

// Testing
console.assert(2+2 === 3, 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years`);
  console.groupEnd(`${dog.name}`);
})

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Sarmad');
console.count('Sarmad');
console.count('Sarmad');
console.count('Sarmad');
console.count('Sarmad');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/sarmadbokhari')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);
