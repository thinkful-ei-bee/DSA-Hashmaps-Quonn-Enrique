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

// 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
// into a hash map of length m = 11 using open addressing and a hash function k mod m.
// ************
// | 22 | 88  |   |   | 4  | 15  | 28 | 17  | 59 | 31 |  10
// -----------------------------------------------------------
//   0    1     2   3   4    5     6    7     8    9     10
// 15 has a collision so it will go to slot 5
// 17 has a collision and will go to slot 7
// 88 has a collision and will go to slot 1
// 59 has a collision and will go to slot 8

//2. WhatDoesThisDo
//Creates 2 new hash maps with 2 new nodes apeice
//Should output 10, then 20

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new hash();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new hash();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str2));
    console.log(map2.get(str4));
}

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

function isItPalindrome(string){
    let oddChar = false;
    let hm = new Map(); //JS built in HashMap
    let value;
    for(let i=0;i<string.length;i++){
        if(hm.has(string[i])){
            let value = hm.get(string[i]);
            hm.set(string[i],(value+1));
        }
        else{
            hm.set(string[i],1);
       }
    }
    const iterator = hm.values(); //just getting the values
    if(Math.floor(iterator.next().value) % 2 !== 0){
        oddChar = true;
    }
    if(oddChar) return false;
    return true;
}
 
  console.log(isItPalindrome("yeebeey"));

  const anagrams = (words) => {
    const groups = new Map();
    words.forEach(word => {
        const sorted = sort(word);
        const group = groups.get(sorted) || [];
        groups.set(sorted, [...group, word]);
    })
    return Array.from(groups.values());
};

console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
/* should output:
[ [ 'east', 'teas', 'eats' ],
  [ 'cars', 'arcs' ],
  [ 'acre', 'race' ] ]
*/



