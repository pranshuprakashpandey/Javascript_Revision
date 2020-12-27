for(let i=0; i<5; i++){

    console.log('in loop', i);
}

let names = ['pranshu', 'snehil', 'shreyash'];

for(let i=0; i<names.length; i++){
    console.log(names[i]);
    let html = `
    <div>${names[i]}</div>;
    `
    console.log(html);
}