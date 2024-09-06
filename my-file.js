var age = 10;
function addition(x, y) {
    return x + y;
}
var result = addition(10, 20);
console.log(result);
function sayHello(target) {
    return "Hello ".concat(target.firstName, ", you have ").concat(target.money, " on your account.");
}
var message = sayHello({ firstName: "John", money: 123 });
console.log(message);
function checkAge(ageToCheck) {
    /** */
}
var lotOfMoney = 50000;
checkAge(lotOfMoney);
var code1 = "123";
var code2 = 456;
var monAge = 50;
function fightCreature(taget) { }
fightCreature('dragon');
function reDamage(hero) {
    hero.life = hero.life - 10;
}
//type MyArrayOfNumbers = Array<number>; //equivalent
var arrayOk = [1, 2, 3];
/** generic function */
function createShop(name, owner, items) {
    return {
        name: name,
        owner: owner,
        items: items
    };
}
//appel de la fonction generique 
var armory = createShop("My Armory", { name: "bob", life: 100,
    attack: 1, defense: 2 }, []);
