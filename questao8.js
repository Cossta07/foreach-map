/*
Crie um algoritmo usando o método forEach() para calcular a 
média de todos os números em um array?
*/

const numerus = [10, 20, 50, 40, 50];
let sum = 0;

numerus.forEach(number => {
    sum += number;
});

const avvee = sum / numerus.length;

console.log("a media: ", avvee);