let person = {
    firstName: "John",
    lastName: "Doe",
    age: 35,
    address: {
        street: "1234 Main St",
        city: "Anytown",
        state: "CA",
        zip: 12345
    },
    phoneNumbers: [
        { type: "home", number: "555-555-5555" },
        { type: "work", number: "555-555-5556" }
    ],
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getAge: function() {
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let m = today.getMonth() - birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }
};



for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}
for (let prop of Object.keys(person)) {
    console.log(prop + ": " + person[prop]);
}