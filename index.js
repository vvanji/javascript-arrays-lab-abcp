const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
kittens.push(name);
console.log(kittens);
}

destructivelyAppendKitten("Tigger");

function destructivelyPrependKitten(name){
kittens.unshift(name);
console.log(kittens);
}

destructivelyPrependKitten("Kit");

function destructivelyRemoveLastKitten(name){
kittens.pop();
console.log(kittens);
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(name){
kittens.shift();
console.log(kittens);
}

destructivelyRemoveFirstKitten();

function appendKitten(name){
return[...kittens, name];
}

appendKitten("Tigger");

function prependKitten(name){
return [name, ...kittens];
}

prependKitten("Tigger");

function removeLastKitten(){
return kittens.slice(0, kittens.length -1);
}

removeLastKitten();

function removeFirstKitten(){
return kittens.slice(1);
}

removeFirstKitten();

