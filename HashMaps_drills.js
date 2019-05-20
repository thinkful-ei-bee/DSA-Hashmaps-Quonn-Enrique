const hash = require("./Hashmap");

main = () => {

    let lor = new hash();
    lor.MAX_LOAD_RATIO = .5
    lor.SIZE_RATIO = 3

    lor.set("Hobbit", "Bilbo");
    lor.set("Hobbit", "Frodo");
    lor.set("Wizard", "Gandolf");
    lor.set("Human", "Aragon");
    lor.set("Elf", "Legolas");
    lor.set("Maiar", "The Necromancer");
    lor.set("Maiar", "Sauron");
    lor.set("RingBearer", "Gollum");
    lor.set("LadyOfLight", "Galadriel");
    lor.set("HalfElven", "Arwen");
    lor.set("Ent", "Treebeard");
    console.log(lor.get("Maiar"))
    console.log(lor.get("Hobbit"))
    console.log(lor)
}

// const MAX_LOAD_RATIO = 0.5;

// const SIZE_RATIO = 3;

// main();

//.1) Create a HashMap class
//All items hashed
//Sauron & Frodo
//Final capacity is 24, because our initial size was 8 and our
//SIZE_RATIO = 3 (8 * 3 === 24)

//2. WhatDoesThisDo
//Creates 2 new hash maps with 2 new nodes apeice
//Should output 10, then 20

// const WhatDoesThisDo = function(){
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new hash();
//     map1.set(str1,10);
//     map1.set(str2,20);
//     let map2 = new hash();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3,20);
//     map2.set(str4,10);

//     console.log(map1.get(str2));
//     console.log(map2.get(str4));
// }

// WhatDoesThisDo();

hasher = (val, length) => {
    return { val: val, index: val % length }
}

let hashVals = [5, 28, 19, 15, 20, 33, 12, 17, 10];

// hashVals.forEach(val => {
//     console.log(hasher(val,9))
// })


// .3) Demonstrate the undersranding of hash maps
//array = [10, 22, 31, 4, 15, 28, 17, 88, 59]
let openOrder = {
    "0": 22,
    "1": 88,
    "4": 4,
    "5": 15,
    "6": 59,
    "7": 28,
    "8": 17,
    "9": 31,
    "10": 10
}


//array = [ 5, 28, 19, 15, 20, 33, 12, 17, 10]

let sepearteOrder = {
    "1": "28,19,10",
    "2": 20,
    "3": 12,
    "5": 5,
    "6": "15,33",
    "8": 17
}


// .4) Remove duplicates

hasher = (str) => {
    let hashTable = new hash();
    for (let i = 0; i < str.length; i++) {
        if (!hashTable.getb(str[i])) {
            hashTable.set(str[i], i);
        }
    }
    return hashTable;
}

// console.log(hasher("google all that you think can think of"));

//.5) Any permutation a palindrome

pHash = (str) => {
    let ourHash = new hash();
    let singleCount = 0;
    let pairCount = 0;
    let difference = pairCount - singleCount;
    for(let j = 0; j < str.length; j++){
        ourHash.set(str[j],j);
        // if (!ourHash.getb(str[j])) {
        //     ourHash.set(str[j], j);
        //     singleCount++;
        // }else{
        //     ourHash.set(str[j], j);
        //     pairCount = pairCount + 2
        //     singleCount = singleCount - 2;
        //     console.log(pairCount, difference, singleCount)
        // }
    }
    return ourHash

    // if(difference === pairCount - 1){
    //     return `${str} Is a palindrome`
    // }else{
    //     return `${str} Is Not a palindrome`
    // }
}

console.log(pHash("yeebeey"));