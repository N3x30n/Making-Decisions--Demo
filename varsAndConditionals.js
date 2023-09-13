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