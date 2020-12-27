let age = 25;

    if(age>20){
        console.log('Eligible');
    }


    const password = 'pass';

    if(password.length>=8){
        console.log('appropriate');
    }

    else{
        console.log('Inappropriate');
    }


    let user = false;

    if(!user){
        console.log('login');
    }


// break and continue

const score = [10, 20, 20, 0, 40, 50, 46];

for(let i=0; i<score.length; i++){

    if(score[i] === 0){
        continue;
    }
    console.log(score[i]);

    if(score[i]===50){
        console.log('highest!')
        break;
    }
}

// switch

const grade = 'B';

switch(grade){
    case 'A':
        console.log('its A!');
        break;
    case 'B':
        console.log('its B!');
        break;    
    case 'C':   
        console.log('its C!');
        break;
    default:
        console.log('invalid');
}