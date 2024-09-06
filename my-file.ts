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
//fightCreature('grenouille'); // ça ne passe pas, ce n'est pas une creature

/** Typer un objet */

type Hero = {
    life: number
}

function reDamage(hero: Hero) {
    hero.life = hero.life - 10;
} 

/** Definition de type d'objet a l'aide d'une interface */

interface Character {
    name: string;
    life: number;
    attack: number;
    defense: number;
}

type Pet = Character;

interface MyHero extends Character {
    pet?: Pet;

}

/** Type des elements d'un tableau */

type MyArrayOfNumbers = Number[]; 
//type MyArrayOfNumbers = Array<number>; //equivalent

const arrayOk: MyArrayOfNumbers = [1, 2, 3];

//const arrayNok: MyArrayOfNumbers = [1, 2, "3"]; //Array not ok

/** Le type unknown */

type Shop  = {
    name: string;
    owner: Character
    items: Array<unknown>;
}

type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
} 

type Armory = Shop & {
    items: Array<Equipment>;
}

/** Type generique   */

type GenShop<ItemType> = {
    name: string;
    owner: Character
    items: Array<ItemType>;
} 

type GenArmory = GenShop<Equipment>;
type GenPetShop = GenShop<Pet>; 

/** generic function */

function createShop<T>(name: string, owner: Character, items: Array<T>): GenShop<T> {
    return {
        name,
        owner,
        items
    }
}

//appel de la fonction generique 

const armory = createShop<Equipment>("My Armory", {name : "bob", life: 100, 
    attack:1, defense:2}, []);