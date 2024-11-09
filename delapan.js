const size = 5;

for (let x = 0; x < size; x++) {
    if (x === 0 || x === size - 1) {
        console.log("* ".repeat(size).trim()); // Baris pertama dan terakhir dengan penuh '*'
    } else {
        console.log("*" + "    . ".repeat(size * 2 - 3) + "*"); // Baris tengah dengan 4 spasi
    }
}
