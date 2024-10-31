const ShoppingCart = (function () {
    // Data privat
    let cart = [];

    // Fungsi privat
    function addItem(item) {
        cart.push(item);
    }

    function removeItem(itemName) {
        cart = cart.filter(item => item.name !== itemName);
    }

    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    // API Publik
    return {
        add: function (item) {
            addItem(item);
            console.log(`${item.name} ditambahkan ke keranjang.`);
        },
        remove: function (itemName) {
            removeItem(itemName);
            console.log(`${itemName} dihapus dari keranjang.`);
        },
        getTotal: function () {
            return calculateTotal();
        },
        getItems: function () {
            return [...cart]; // Mengembalikan salinan array keranjang
        }
    };
})();

// Penggunaan
ShoppingCart.add({ name: 'Apel', price: 1.5 });
ShoppingCart.add({ name: 'Pisang', price: 1 });
console.log(`Total: Rp${ShoppingCart.getTotal()}`); // Total: Rp2.5
ShoppingCart.remove('Apel');
console.log(ShoppingCart.getItems()); // [{ name: 'Pisang', price: 1 }]
