let ages = [3, 9, 23, 64, 2,8, 25, 93];
console.log(ages[ages.length-1]- ages[0]);

// Add a new age to your array and repeat the step above 
//to ensure it is dynamic (works for arrays of different lengths).

ages.push(5);
console.log(ages);
console.log(ages[ages.length-1]- ages[0]);


//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
var total = 0;
for(var i= 0; i<names.length; i++){
    total+=names[i].length;
}
var average= total/names.length;
console.log(average);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log(names.join(' '));

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [names];
let lengths= names.map(function(element){
    return element.length;
});
console.log(lengths);
console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the 
//sum of all the elements in the array. Print the result to the console
let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum);

//7. Write a function that takes two parameters, word and n, as arguments 
//and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return 
//‘HelloHelloHello’).


function myWord(word, n){
   return word.repeat(n);
}
console.log(myWord("Hello", 3));


function repeatedWord(word, n){
    let tempWord =" ";
    for(let i=0; i < n; i++){
        tempWord+= word;
    }
    return tempWord;
}
console.log(repeatedWord("Hello",3));

//8.Write a function that takes two parameters, firstName and lastName, 
//and returns a full name (the full name should be the first and the 
//last name separated by a space.

createFullName();
function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(createFullName("Amanda", "Pagel"));

//9.Write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100.
let arrayOfNumbers = [10,13,25,32,40];
let sums = arrayOfNumbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sums);

function greaterThan(array){
    if(array > 100){
        return "true";
    }
    return "false";
}
console.log(greaterThan(sums));

//Write a function that takes an array of numbers and 
//returns the average of all the elements in the array.

function calculateAverage(array){
    var total = 0;
    var count = 0;
    array.forEach(function(item, index) {
        total += item;
        count ++;
    });
    return total / count;
} 

console.log(calculateAverage(arrayOfNumbers));

//11.Write a function that takes two arrays of numbers and returns 
//true if the average of the elements in the first array is greater 
//than the average of the elements in the second array.


let arrayOne =[1,2,3,4,5];
let arrayTwo=[1,1,2,3,4];
function twoArrays(array1, array2){
    if (array1 > array2){
        return true;
    }
        return false;
}

console.log(twoArrays(arrayOne, arrayTwo));


//12.Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if 
//moneyInPocket is greater than 10.50.


function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && (moneyInPocket > 10.50)){ 
        return true;
    }
        return false;
}

console.log (willBuyDrink(true, 11));

//13.Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it

//function lastProblem();

