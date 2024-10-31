class User {
    constructor(name) {
        this.name = name;
        this.reputation = 0;
    }

    getReputation() {
        return this.reputation;
    }

    addReputation() {
        this.reputation += 1;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
        this.role = "admin";
    }

    // Method khusus untuk admin
    banUser(user) {
        console.log(`${user} has been banned!`);
    }

    getRole() {
        console.log("Admin: " + this.name);
    }
}

const admin1 = new Admin("panda");
admin1.getRole();                   // Output: "Admin: panda"
admin1.addReputation();              // Menambah reputation admin1
console.log(admin1.getReputation()); // Output: 1
