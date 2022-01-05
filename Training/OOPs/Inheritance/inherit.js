//Inheritance example
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //method to return the string
    getname() {
        return `Name of person: ${this.name} And Age is ${this.age}`;
    }
}
class student extends person {
    constructor(name, age, id) {
        //super keyword to for calling above class constructor
        super(name, age);
        this.id = id;
    }
    toString() {
        return (`${this.getname()} And Student ID: ${this.id}`);
    }
}

let student1 = new person('Uv', 20);
console.log(student1.getname());
let student2 = new student('Utsav', 20, 1);
console.log(student2.toString());