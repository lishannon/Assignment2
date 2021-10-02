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
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

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

console.log("mySome");
const even = (element) => element % 2 === 0;
console.log(arr.mySome(even));
console.log("some");
const even1 = (element) => element % 2 === 0;
console.log(arr.some(even1));

console.log("mySome");
console.log(words);
const result = words.mySome(word => word.length === 5);
console.log(result);
console.log("some");
console.log(words);
const result1 = words.some(word => word.length === 5);
console.log(result1);

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};