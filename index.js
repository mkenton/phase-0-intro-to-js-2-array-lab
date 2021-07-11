// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name) {
    const newArray = [name, ...cats];
    return newArray;
}

function removeLastCat() {
    const newArray = cats.slice(0,-1);
    return newArray;
}

function removeFirstCat() {
    const newArray = cats.slice(1);
    return newArray;
}