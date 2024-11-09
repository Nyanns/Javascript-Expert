function factorialTo(n) {
    if (n <= 1) {
        return 1;
    } else {
        let sum = 1;
        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }
}

function factorialTo2(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorialTo(n - 1);
    }
}

let result = factorialTo(5);
let result2 = factorialTo2(4);

console.log(result);
console.log(result2);