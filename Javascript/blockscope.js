let age = 30; // global variable

if(true){
    // age = 40;
    // console.log('inside', age);

    let age = 40;
    console.log('inside', age);
}

console.log('outside', age);