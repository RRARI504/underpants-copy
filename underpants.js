// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;

};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(value === null){
        return "null";
    }
    if(Array.isArray(value)){
        return "array";
    }

    return typeof value;
}








/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


_.first = function(arr, num){
    if(!(Array.isArray(arr))){
        return []
    }

    if(typeof num != 'number' || isNaN(num)){
        return arr[0];

    }

    return arr.splice(0, num);
}







/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


_.last = function(arr, num){
    if(!Array.isArray(arr)){
        return [];
    }

    if(typeof num != 'number' || isNaN(num)){
        return arr[arr.length - 1];

    }

    if(num < 0){
        return [];

    }

    return arr.slice(-num)


};




/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, value){
    return arr.indexOf(value[0]) 

}

console.log(_.indexOf(["a","b","c"], "c"))









/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value){
    return arr.includes(value)

}









/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function(collection, func){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++ ){
            func(collection[i], i, collection)
        }

    } else if(typeof collection === 'object' && collection !== null){
            for(var key in collection){
                if(collection.hasOwnProperty(key)){
                    func(collection[key], key, collection)
                }
                
            }

        }

    };









/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


 _.unique = function(array){
    return array.filter(function(char, index){ //the method .filter creates a new array of elements 
        // that pass the given test. It takes a function w/ the parameter char and an index. 
        return array.indexOf(char) === index
        //this test return the indexOf the current charachter and sees if it is equal to the index
        //if they are equal it means the character is the first occurence of the value in the array
        //and is saved in the new array. Duplicates are not saved.
        
    });

 }
 console.log(_.unique([1,2,2,4,5,6,5,2]))


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(array, func){
  
    var output = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            output.push(array[i])

        }

    }
    return output;
}
console.log(_.filter([1,2,3,4,5], function(x){return x % 2 === 0}))

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


_.reject = function(array, func){

    var output = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            output.push(array[i])

        }

    }
    return output;
}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


_.partition = function(array, func){

    let truthy = []
    let falsy = []

    for(let i = 0; i < array.length; i++){ 
        //in the two past functions we returned truthy values and falsy values, here we made two seperate 
        //empty arrays and pushed the truthy and falsy values seperately. 

        if(func(array[i], i, array)){
            truthy.push(array[i])

        }else{
            falsy.push(array[i])
        }

    }

    return [truthy, falsy]

}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    const output = []; //output array 

    if(Array.isArray(collection)){ //determine if collection is an array
        for(let i = 0; i < collection.length; i++){//loop over the collection iterate positively
            const result = func(collection[i], i, collection) //variable equal to our callback function
            output.push(result)
        }

    } else { //handle objects 
        let keys = Object.keys(collection)//this gets all the keys of the object
        for(let i = 0; i < keys.length; i++){ //loop over each key
            let key = keys[i]//variable set to the current key in the object 
            let result = func(collection[key], key, collection)
            //variable result set equal to the invocation of the callback function with the current value,
            //its key and the collection
            output.push(result)

        }

    }
return output; 

}





/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){
    
   return _.map(array, function(element){ //.map transforms elements in an array by applying a function to 
    //each element 
    return element[prop]//returning a new array with the value of the property for every element in the array
   });
    

}









/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func){
    if(Array.isArray(collection)){ //checks if collection
        if(func === undefined){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false;
                }
            }
        }else{ 
            for(let i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                }
            }
        }
    } else {
        

    }

    return true;

};









/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){

    if(Array.isArray(collection)){ //checks if collection is an array 
        if(func === undefined){ //
            for(let i = 0; i < collection.length; i++){ //iterates over the collection for arrays 
                if(collection[i]){//
                    return true;
                }
            }
            return false
        } else{
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection)){
                    return true;
            }

        }
        return false;
        
            
    }

        }
            //basic formula for checking if an object is an object and iterating over it
            for(let key in collection){
                if(collection.hasOwnProperty(key)){
                    if(func === undefined){
                        if(collection[key]){
                            return true

                        }

                    

                }else{
                    if(func(collection[key], key, collection)){
                        return true

                    }
                }
               



            }

        }
        

    }
    








/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


_.reduce = function(array, func, seed){
    //initialize an output (the thing we are accumulating)
let output;
if(seed === undefined){//this is determining when the funciton is invoked is nothing passed to the seed
    //if so the seed parameter is undefined
    output = array[0]; //if there is no seed value take first item in the array and make it our seed
    for(let i = 1; i < array.length; i++){//for loop starts at one index since we assigned the output to array[0] for no seed 
        output = func(output, array[i], i) //reassigning output to the result of invoking the callback 
        //passing in the current output, the current item in the array and h ecurrent index
    }//this whole part covers if there is no seed value

}else{//this is for when there is a seed value 
    output = seed
    for(let i = 0; i < array.length; i++){
        output = func(output, array[i], i)
    }
}
return output


}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1){

    for(let i = 1; i < arguments.length; i++){
        let object2 = arguments[i]

        for(let key in object2){
            if(object2.hasOwnProperty(key)){
                object1[key] = object2[key]

            }

        }
        

    }
    return object1;
    
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}