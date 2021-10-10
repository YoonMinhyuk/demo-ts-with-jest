/*
* '&' 연산자를 사용하여 2개 이상의 타입을 묶는 것
* '&' 로 묶여진 모든 타입을 만족해야한다.
* */

namespace IntersectionType {
    interface Person {
        name: string;
        age: number
    }

    interface Developer {
        name: string,
        skills: string[]
    }

    function askSomeone(someone: Person & Developer) {
        // 모두 호출 가능.
        someone.name
        someone.age
        someone.skills
    }
}