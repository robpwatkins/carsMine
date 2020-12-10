// const cars = ['Ford', 'Toyota', 'BMW', 'Jeep'];
// console.log(cars.length);

// const moreCars = ['Nissan', 'Acura', 'Infinity', 'Honda'];
// console.log(moreCars);

// let totalCars = cars.concat(moreCars);
// console.log(totalCars);
// console.log(totalCars.indexOf('Honda'));
// console.log(totalCars.lastIndexOf('Ford'));

// let stringOfCars = totalCars.join(' ');
// console.log(stringOfCars);

// let totalCarsFromString = stringOfCars.split(' ');
// console.log(totalCarsFromString);

// let carsInReverse = totalCars.reverse();
// console.log(carsInReverse);

// carsInReverse.sort();
// console.log(carsInReverse.indexOf('Acura') == 0);

const cars = ['Ford', 'Chevy', 'Lincoln', 'Toyota'];
console.log(cars.length);

const moreCars = ['BMW', 'Nissan', 'Mitsubishi', 'Honda'];
const totalCars = cars.concat(moreCars);
console.log(totalCars);
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

const stringOfCars = totalCars.join();
console.log(stringOfCars);

const carsFromString = stringOfCars.split(',');
console.log(carsFromString);

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

carsInReverse.sort();
console.log(carsInReverse.indexOf('BMW') == 0);

console.log(carsInReverse);

carsInReverse.splice(1, 2, 'heyoo', 'wayoo');
console.log(carsInReverse);

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
const reptiles = pets.slice(4, 6);
console.log(reptiles);
console.log(pets);

const removedPets = pets.splice(1, 2, 'hamster');
console.log(removedPets, pets);

pets.push(removedPets[0]);
console.log(pets);