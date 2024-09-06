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