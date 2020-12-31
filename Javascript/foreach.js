// let people = ['pranshu','snehil', 'shreyash'];

// people.forEach((person, index) => {
//         console.log(index, person);
//     });

// const logPerson = (person, index) => {
//     console.log(`${index} is ${person}`);
// };

// people.forEach(logPerson);


const ul = document.querySelector('.people');

const people = ['pranshu','snehil', 'shreyash'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple"> ${person} </li>`;
});

console.log(html);
ul.innerHTML = html;
