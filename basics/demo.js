let person = { Name: "john", age: 10 };
let person2 = person;
person2.Name = "jane";
console.log(person);
console.log(person2);

let person3 = { ...person };
person3.Name = "sid";
console.log(person);
console.log(person2);
console.log(person3);
