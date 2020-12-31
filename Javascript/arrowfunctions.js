const calcArea = (radius) => {
    return 3.14*radius**2;
};

const area = calcArea(5);
console.log(area);


console.log('When there is only one param');

const calcArea2 = radius => 3.14*radius**2;

const area2 = calcArea2(5);
console.log(area2);

//You will need parantheses for every other case


const greet = () => 'hello world';
let greeting = greet();
console.log(greeting);

// create an arrow function for the below

const bill = function(products, tax){
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i]+products[i]*tax;
    }
    return total;
}

console.log(bill([10,15,30],2));

const bill2 = (products, tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i]+products[i]*tax;
    }
    return total;
};


console.log(bill2([10,15,30],2));


