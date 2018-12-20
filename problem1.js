// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000

function isMultOf3Or5(int) {
    return (int % 3 === 0 || int % 5 === 0)
}

function sumMultiplesBelow(limit) {
    let sum = 0;
    for(i = 0; i<limit; i++) {
        if(isMultOf3Or5(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumMultiplesBelow(1000));
