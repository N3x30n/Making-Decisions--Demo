/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack){
    console.log('Jon Snow has better attack than Jamie Lannister')
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log('Jamie Lannister has better attack than Jon Snow')
} else {
    console.log('Our fighters are evenly matched')
};

let jonSnowHealth = 100;
let jonSnowDefense = 0;

console.log('Jamie Lannister attacks Jon Snow')

if (jonSnowHealth <= jamieLannisterAttack){
    console.log('Jon Snow has been slain')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25;

console.log('Jon Snow has picked up a shield that increases his defense by 25')
//second attack from Jamie
console.log('Jamie Lannister attacks Jon Snow again')

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log('Jon Snow has been slain')
} else {
    jonSnowHealth -= (jamieLannisterAttack-jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

let isDead = false;
//Jamie uses a gatling gun at jon 3 times as he runs into the forest
//theres a 50% chance, per gun usage, that jon is dead

for (let i = 1; i <= 1; i++){
    isDead = Math.random() > .5;
    if (isDead === true){
        console.log(`Jon has died after ${i} rounds`)
        jonSnowHealth = 0
        break
    } 
}
let counter = 0;
if (isDead === false){
    console.log('It is a miracle! Jon is alive after the bombardment.')
    //Jamie wants Jon dead and will ensure it happens
    //He pursues Jon into the woods to use his fists
    while (jonSnowHealth > 0){
        counter += 1
        console.log("Jamie punches Jon")
        jonSnowHealth -= 5
        
    }
    console.log(`Jamie punches Jon ${counter} times`);
}



console.log('Okay, Jon didnt make it, sorry')


