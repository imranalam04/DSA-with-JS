/* Big O :- Big O notation helps us understand how long an algorithm will take to run or how much 
memory it will need as the amount of data it handles grows. */

/* O(n) :- signifies that the exception time of the algorithm grows linearly in proportion to the size
of the input data (n) */

/* Imagine you have a list of groceries. To find a specific item (like milk), you might need to scan through 
the entire list. if the list has 5 items, it'll take relatively short time. But if the list has 500 items,
it'll take considerably longer. This is the essence of linear time complexity */

const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];
// O(n)
const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log(`Found : ${item}`)
        }
    }

    for (let j = 0; j < groceries.lenght; j++) {
        if (groceries[j] === item) {
            console.log(`Found ${item} 2`)
        }
    }
    //n + n = 2n -> 0(2n)
    //Drop the constant so it becomes 0(n)
}

searchForItem("eggs")