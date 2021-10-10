// js 생성자 함수 => 이것이 class 로 바뀐것
// @ts-ignore
// function Person(name, age) {
//     // @ts-ignore
//     this.name = name;
//     // @ts-ignore
//     this.age = age
//
//     this.getName = () => {
//
//     }
// }
// new Person('z', 10).getName()


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