// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function isPrime(n) {
    if(n===1) return false;
    if(n===2) return true;
    for(let i = 2; i < n; i++) {
        if(n%i === 0) {
            return false;
        }
    }
    return true;
}

function isEven(n) {
    return !(n&1);
}

function findPrimeFactors(n) {
    const primes = [];
    if(isEven(n)) {
        do {
            n = n / 2;
            primes.push(2);
        } while(isEven(n));
    }

    // now that we've got it down to an odd number,
    // factor should always be odd
    // start with 3, which we know is prime
    let factor = 3;
    do{
        if(n % factor === 0) {
            n = n/factor;
            primes.push(factor);
        } else {
            factor += 2; //increment by two to keep it odd
        }
    } while(factor < n);
    if(n> 1) {
        primes.push(n);
    }
    return primes;    
}

function findLargest(arr) {
    return arr.sort((a, b) => b-a)[0];
}

console.log(findPrimeFactors(600851475143))
console.log(findLargest(findPrimeFactors(600851475143)));