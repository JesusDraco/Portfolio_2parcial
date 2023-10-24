console.log("Hello, world!");

const sw = require('star-wars-quotes');
const quote = sw();
console.log(quote);

const heroes = require('superheroes');
const villains = require('supervillains');
const randomHero = heroes.random();
const randomVillain = villains.random();
console.log(`${randomHero} vs ${randomVillain}`);

const fs = require('fs');
const filePath = './data/input.txt';
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
    } else {
        console.log('Tu mensaje es: ' + data);
    }
});