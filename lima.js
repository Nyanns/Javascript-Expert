class User {
    constructor(name) {
        this._name = name;
        this._reputation = 0;
    }

    get name() {
        return this._name;
    }

    get reputation() {
        return this._reputation;
    }

    set name(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.log('Name must be a string');
        }
    }

    set reputation(value) {
        if (typeof value === 'number') {
            this._reputation = value;
        } else {
            console.log('Reputation must be a number');
        }
    }

    addReputation() {
        this._reputation += 1;
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
        this._role = "admin";
    }

    // Getter untuk properti role
    get role() {
        return this._role;
    }

    // Setter untuk properti role
    set role(newRole) {
        if (newRole === "admin" || newRole === "superadmin") {
            this._role = newRole;
        } else {
            console.error("Invalid role");
        }
    }

    banUser(user) {
        console.log(`${user.name} has been banned!`);
    }
}

// Contoh Penggunaan
const admin1 = new Admin("Panda");

// Mengakses dan mengubah nama menggunakan getter dan setter
console.log(admin1.name);  // Output: "Panda"
admin1.name = "NewPanda";
console.log(admin1.name);  // Output: "NewPanda"

// Menambah reputasi
admin1.addReputation();
console.log(admin1.reputation);  // Output: 1

// Mengubah role dengan setter dan memeriksanya dengan getter
console.log(admin1.role);  // Output: "admin"
admin1.role = "superadmin";
console.log(admin1.role);  // Output: "superadmin"

// Coba set nilai invalid untuk role
admin1.role = "user";  // Output: "Invalid role"
