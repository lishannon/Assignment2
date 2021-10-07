// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        callbackFn(this[i],i, this);
    }
};


// MAP //
Array.prototype.myMap = function(callbackFn) {
    const arr =[];
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        arr[i] = callbackFn(this[i]);
    }
    return arr;
};

// FILTER //
Array.prototype.thePush = function(...args) {
    let arg_i =0;
    let length = this.length;
    for (let i =length; i <length + args.length; i++){
        this[i]=args[arg_i];
        arg_i ++;
    }
    return this.length;

};

Array.prototype.myFilter = function(callbackFn) {
    const arr2 =[];
    var check =false; 
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        check = callbackFn(this[i],i, this);
        if (check === true){
            arr2.thePush(this[i]);
        } 
    }
    return arr2;
};

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

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    var check =true; 
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        check = callbackFn(this[i], i, this);
        if (check === false){
            return false;
        }
    }
    return true;
};


// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue) {
    var result;
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined) continue;
        if (i === 0){
            if (initialValue === undefined){
                result = this[i];
            }
            else{
                result = this[i]+initialValue;
            }
        }
        else{
            result = callbackFn(result,this[i],i,this);
        }
        
    }
    return result;
};

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

// const animals = ['pigs', 'goats', 'sheep'];

// console.log("push")
// const count = animals.push('cows');
// console.log(count);
// console.log(animals);
// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);

// const animals2 = ['pigs', 'goats', 'sheep'];

// console.log("push")
// const count2 = animals2.myPush('cows');
// console.log(count2);
// console.log(animals2);
// animals2.myPush('chickens', 'cats', 'dogs');
// console.log(animals2);

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    if (fromIndex === undefined){
        for (var i = (this.length)-1; i >= 0 ; i--){
            if (this[i] === undefined) continue;
            if (searchElement === this[i])
                return i ;
        }
    }
    else{
        if (fromIndex < 0){
            fromIndex = this.length + fromIndex;
        }
        for (let i =fromIndex; i >= 0; i--){
            if (this[i] === undefined) continue;
            if (searchElement === this[i]){
                return i;
            } 
        }
    }
    
    return -1;
};

// console.log("lastIndexOf")
// var numbers = [2, 5, 9, 2];
// console.log(numbers.lastIndexOf(2)) // 3
// console.log(numbers.lastIndexOf(7))   // -1
// console.log(numbers.lastIndexOf(2, 3))  // 3
// console.log(numbers.lastIndexOf(2, 2))  // 0
// console.log(numbers.lastIndexOf(2, -2)) // 0
// console.log(numbers.lastIndexOf(2, -1)) // 3
// console.log("myLastIndexOf")
// console.log(numbers.myLastIndexOf(2)) // 3
// console.log(numbers.myLastIndexOf(7))   // -1
// console.log(numbers.myLastIndexOf(2, 3))  // 3
// console.log(numbers.myLastIndexOf(2, 2))  // 0
// console.log(numbers.myLastIndexOf(2, -2)) // 0
// console.log(numbers.myLastIndexOf(2, -1)) // 3


// KEYS //
Object.grabKeys = function(objName) {
    const arr = [];
    for(let keys in objName) {
        arr.push(keys);
    }
    return arr;
};

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
    d: true,
    e: 1
  };
  
//   console.log(Object.keys(object1));
//   console.log(Object.grabKeys(object1));

// VALUES //
Object.grabValues = function(objName) {
    const arr = [];
    for(let keys in objName) {
        arr.push(objName[keys]);
    }
    return arr;

};

// console.log(Object.values(object1));
// console.log(Object.grabValues(object1));