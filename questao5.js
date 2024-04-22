/*
Questão 05 – Crie um algoritmo usando o método map() para criar um novo 
array com o dobro de cada número ímpar em um array original?
*/

const array = [1, 2, 3, 4, 5];

const outroArray = array.map(numero => {
    if (numero % 2 !== 0) {
        return numero * 2; 
    } else {
        return numero; 
    }
});

console.log(outroArray);