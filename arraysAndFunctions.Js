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

//7.7.	Write a function that takes two parameters, word and n, as arguments 
//and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return 
//‘HelloHelloHello’).


