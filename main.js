const cars = ['Ford', 'Chevy', 'Toyota', 'Jeep'];
console.log(cars.length);

const moreCars = ['Acura', 'Audi', 'Nissan', 'Honda'];
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
console.log(carsInReverse.indexOf('Acura'));

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6);
console.log(reptiles, pets);

const removedReptiles = pets.splice(4, 2, 'hamster');
console.log(removedReptiles, pets);

const removedPet = pets.pop();
console.log(removedPet, pets);

pets.push(removedPet);
console.log(pets);

console.log(pets.shift());

pets.unshift('turtle');
console.log(pets);

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = (num, index, arr) => {
  return arr[index] = num + 2
}

numbers.forEach(addTwo);
console.log(numbers);