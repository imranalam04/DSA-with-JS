/* O(1) aka constant time, signifies that the  execution time of an algorithm remains constant regardless
of the input size */

/* Imagine you have a box filled with items, and you know exactly where each item is located.
To get a specific item, you go directly to its location, taking the same amount of time irrespective 
of how many items are in the box. */


const numbers = [1,2,3,4,5];
// O(1)
const getElements = (arr,index) => arr[index];
console.log(getElements(numbers,2)) 


