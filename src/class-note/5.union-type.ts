function logMessage1(value: string) {
    console.log(value)
}

logMessage1('hello')
// logMessage1(100) // error

/*
*  '|' 연산자를 사용하여 타입을 여러개 늘려줄 수 있음. 이런 것을 가리켜 Union Type 이라고 함.
* */
function logMessage2(value: string | number) {
    // typeof => type guard
    if (typeof value === 'string') {
        console.log(value.toUpperCase())
    }

    if (typeof value === 'number') {
        console.log(value)
    }

    if (value)
        throw new TypeError(`${typeof value}  type is unsupported.`)
}

logMessage2('hello')
logMessage2(100)

namespace Operator {
    interface Person {
        name: string;
        age: number;
    }

    interface Developer {
        name: string;
        skill: string;
    }

    function askSomeone(someone: Person | Developer) {
        someone.name
        // someone 이 Person type 인지 Developer type 인지 컴파일러는 알수 없기에 공통된 속성만 호출 가능
        // someone.skill // 호출 불가
        // someone.age // 호출 불가
    }
}