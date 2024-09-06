const age: number = 10; 
 

function addition(x: number, y: number): number {
    return x + y;
}
const result:number = addition(10, 20);
console.log(result);

function sayHello(target: {firstName: string, money: number}){
    return `Hello ${target.firstName}, you have ${target.money
     } on your account.`;
}

const message: string = sayHello({firstName: "John", money: 123});

console.log(message);

/** Type  */

type Money = number;
type Age = number;

function checkAge(ageToCheck: Age) {
/** */
}

const lotOfMoney: Money = 50000;

checkAge(lotOfMoney); 


type CodeSecret = string | number;

const code1: CodeSecret = "123";

const code2: CodeSecret = 456;

/** autorisation de variable en tant que type */

type AgeMin = 50; 

const monAge: AgeMin = 50;

type Creature = 'blob' | 'dragon' | 'unicorn';

function fightCreature(taget: Creature) {}

fightCreature('dragon');
fightCreature('grenouille'); // ça ne passe pas, ce n'est pas une creature