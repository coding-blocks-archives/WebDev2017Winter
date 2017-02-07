console.log('hello');
console.log(this);


Person = {
    firstname: null,
    lastname: null,
    age: null,
    printName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

p = Object.create(Person);
p.firstname = "A"
p.lastname = "B"
p.age = 2;

function Student (first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.printName = function () {
        console.log(this.first + " " + this.last);

    }
    this.func = function () {
        return this;
    }
}

p.printName();

s = new Student("C", "D", 5);
s.printName();
console.log(s.func() == s);
console.log(s.__proto__ == Student.prototype);

s2 = Object.create(Student.prototype)
console.log(s2.__proto__ == s.__proto__);

