
// rest and spread

// spread 
// The spread operator ... spreads out elements from arrays or objects, making it easier to copy, merge, or pass them around in a clean way.


// to copy the values of array or object
var arr = ["atif" , 3 , "khan"]
var b  = [...arr] 

// console.log(b);


var arr1 = [1,2,3,4,5]

// to merge two array
var c = [...arr,...arr1]
//console.log(c);



// pass or update 

var update = [...arr , "ali"]
//console.log(update);




// Rest operator use to pick the remaining values and store it in one variable 

function abcd(value , ...rest){
       console.log(value , rest);
}
abcd(1,2,3,4)
