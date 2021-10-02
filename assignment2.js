// FOR EACH //
const arr = [1, 12,3,34,25, 6] 
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
Array.prototype.mySome = function() {

};

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