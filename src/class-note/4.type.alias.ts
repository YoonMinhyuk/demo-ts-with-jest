/*
* type alias 는 새로운 타입을 생성하는 것이 아니라 특정 타입을 쉽게 사용하기 위해 다른 이름을 붙이는 것이다.
* type preview 도 다르게 보임.
* type 은 extends(확장) 불가능.
* type 보다는 interface 사용을 권장. (공식문서도 권장하고 있음. 좋은 소프트웨어는 언제나 확장이 용이해야한다는 원칙!)
* */
type MyString = string

// interface Person {
//     name: String
//     age: number
// }

type Person = {
    name: String
    age: number
}

const person: Person = {
    name: 'name',
    age: 10
}