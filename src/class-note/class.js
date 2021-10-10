// ES2015 (ES6) 에 추가됌
class Person {
    // @ts-ignore
    constructor(name, age) {
        // @ts-ignore
        this.name = name;

        // @ts-ignore
        this.age = age
    }
}

// @ts-ignore
const person = new Person('zz', 10);

console.log(person)

// js prototype
const user = {name: 'admin', age: 100}
console.log(`user: ${user}`)

const admin = {}
console.log(admin)

admin.prototype = user
console.log(admin)

admin.role = 'ADMIN'
console.log(admin)