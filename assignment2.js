// FOR EACH //
const arr = [1, 9,11,35,0, 9] 
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        //element
        //element, index
        //eleement, index, array 
        callbackFn(this[i],i, this);
    }
};

//Test myEach
// console.log("myEach:")
// arr.myEach((x) => console.log(x));
// arr.myEach((x, i) => console.log(x,i));
// arr.myEach((x, i, arr) => console.log(x,i, arr));

// console.log("ForEach:")
// arr.myEach((x) => console.log(x));
// arr.myEach((x, i) => console.log(x,i));
// arr.myEach((x, i, arr) => console.log(x,i, arr));

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const arr2 =[];
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        arr2[i]=callbackFn(this[i]);
    }
    return arr2;
};

// console.log("myMap:")
// const map1 = arr.map(x => x * 2);
// console.log(map1);
// console.log(arr);
// console.log("map:")
// const map2 = arr.myMap(x => x * 2);
// console.log(map2);


// FILTER //
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(callbackFn) {
    const arr2 =[];
    var check =false; 
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        check = callbackFn(this[i]);
        if (check === true){
            arr2.push(this[i]);
        } 
    }
    return arr2;
};

// console.log("myFilter");
// console.log(words);
// const result = words.myFilter(word => word.length === 5);
// console.log(result);
// console.log("filter");
// console.log(words);
// const result1 = words.filter(word => word.length === 5);
// console.log(result1);


// SOME //
Array.prototype.mySome = function(callbackFn) {
    var check =false; 
    var result = false;
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        check = callbackFn(this[i]);
        if (check === true){
            result = true;
        } 
    }
    return result;
};

// console.log("mySome");
// const even = (element) => element % 2 === 0;
// console.log(arr.mySome(even));
// console.log("some");
// const even1 = (element) => element % 2 === 0;
// console.log(arr.some(even1));

// console.log("mySome");
// console.log(words);
// const result = words.mySome(word => word.length === 5);
// console.log(result);
// console.log("some");
// console.log(words);
// const result1 = words.some(word => word.length === 5);
// console.log(result1);

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    var check =false; 
    var result = true;
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        check = callbackFn(this[i]);
    }
    return result;
};

// console.log("every")
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 40, 19];
// console.log(array1.every(isBelowThreshold));

// console.log("myEvery")
// const isBelowThreshold1 = (currentValue) => currentValue < 40;
// const array2 = [1, 30, 39, 29, 40, 19];
// console.log(array2.myEvery(isBelowThreshold1));


// REDUCE //

const array1 = [1, 2, 3, 4];
Array.prototype.myReduce = function(callbackFn, value) {
    var result;
    if (value === undefined){
        result = 0;
    }
    else{
        result = value;
    }
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        result = this[i]+ result;
    }
    return result;
};

// console.log("reduce")
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 6));
// console.log("myReduce")
// console.log(array1.myReduce(reducer));
// console.log(array1.myReduce(reducer, 6));
// console.log(array1)

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex) {
    var result = false;
    if (fromIndex === undefined){
        for (let i = 0; i < this.length; i++){
            if (this[i] === undefined) continue;
            if (searchElement === this[i]){
                result = true;
            } 
        }
    }
    else{
        for (let i = fromIndex; i < this.length; i++){
            if (this[i] === undefined) continue;
            if (searchElement === this[i]){
                result = true;
            } 
        }
    }
    
    return result;
};
// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// console.log(pets.includes('at'));

// console.log(pets.myIncludes('cat'));
// console.log(pets.myIncludes('at'));

// console.log("check");
// console.log([1, 2, 3].includes(3, 1));  
// console.log([1, 2, 3].includes(2, 0)); 
// console.log([1, 2, 3].includes(1, 2)); 

// console.log("check my");
// console.log([1, 2, 3].myIncludes(3, 1));  
// console.log([1, 2, 3].myIncludes(2, 0)); 
// console.log([1, 2, 3].myIncludes(1, 2)); 

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    if (fromIndex === undefined){
        for (let i = 0; i < this.length; i++){
            if (this[i] === undefined) continue;
            if (searchElement === this[i]){
                return i;
            } 
        }
    }
    else{
        for (let i = fromIndex; i < this.length; i++){
            if (this[i] === undefined) continue;
            if (searchElement === this[i]){
                return i;
            } 
        }
    }
    
    return -1;
};

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log("indexOf")
// console.log(beasts.indexOf('bison'));
// console.log(beasts.indexOf('bison', 2));
// console.log(beasts.indexOf('giraffe'));
// console.log("myIndexOf")
// console.log(beasts.myIndexOf('bison'));
// console.log(beasts.myIndexOf('bison', 2));
// console.log(beasts.myIndexOf('giraffe'));

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i =0;
    let length = this.length;
    for (let i =length; i <length + args.length; i++){
        this[i]=args[arg_i];
        arg_i ++;
    }
    return this.length;

};

const animals = ['pigs', 'goats', 'sheep'];

console.log("push")
const count = animals.push('cows');
console.log(count);
console.log(animals);
animals.push('chickens', 'cats', 'dogs');
console.log(animals);

const animals2 = ['pigs', 'goats', 'sheep'];

console.log("push")
const count2 = animals2.myPush('cows');
console.log(count2);
console.log(animals2);
animals2.myPush('chickens', 'cats', 'dogs');
console.log(animals2);

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};