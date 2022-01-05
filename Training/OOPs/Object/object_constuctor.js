//using a constructor
function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person('Utsav', 'Vasoya');
let person2 = new person('Rahul', 'Avasthi');

console.log(person1);
console.log(`${person2.first_name} ${person2.last_name}`);
