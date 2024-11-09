const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumTo(n) {
    if (n <= 1) {
        return n; // Jika n adalah 0 atau 1, kembalikan n langsung
    } else {
        return n + sumTo(n - 1); // Lakukan rekursi untuk menjumlahkan angka dari n hingga 1
    }
}

function sumTo2(n) {
    if (n <= 1) {
        return n;
    } else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
}

rl.question("Enter a number: ", (input) => {
    const n = Number(input); // Mengonversi input ke number
    console.log("Hasil sumTo:", sumTo(n));
    console.log("Hasil sumTo2:", sumTo2(n));
    rl.close();
});
