function fibonaciTo(n) {
    let fibSec = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSec = [...fibSec, fibSec[i - 2] + fibSec[i - 1]];
    }
    return fibSec.slice(0, n); // Memotong jika diperlukan agar panjangnya sesuai
}

function fibonaciTo2(n, sequence = [0, 1]) {
    if (sequence.length >= n) {
        return sequence.slice(0, n); // Memotong jika diperlukan agar panjangnya sesuai
    } else {
        return fibonaciTo2(n, [...sequence, sequence[sequence.length - 2] + sequence[sequence.length - 1]]);
    }
}

console.log(fibonaciTo2(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonaciTo(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
