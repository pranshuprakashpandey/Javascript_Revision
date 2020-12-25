let array = ['pranshu', 'snehil', 'ashish'];

console.log(array);
console.log(array.length);
console.log(array.join('-'));

array[1] = 'samarth';
console.log(array);

let random = ['pranshu', '24', '22-05,1996'];
console.log(random);

console.log(random.indexOf('24'));

console.log(array.concat(random));

console.log(array.push('snehil'));  //returns the length of new array

console.log(array);

console.log(array.pop()); //returns the value that it popped off, that was last added   
console.log(array);