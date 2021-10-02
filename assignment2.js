// FOR EACH //
const arr = [1, 2] 
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
console.log("myEach:")
arr.myEach((x) => console.log(x));
console.log("myEach:")
arr.myEach((x, i) => console.log(x,i));
console.log("myEach:")
arr.myEach((x, i, arr) => console.log(x,i, arr));

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

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