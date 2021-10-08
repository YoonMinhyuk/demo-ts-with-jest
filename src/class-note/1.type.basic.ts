// JS 문자열 선언, ES6 부터는 const, let 사용
// var jsString = 'hello';

// TS 문자열 선언
const tsString: string = 'hello'

// TS 숫자
const tsNumber: number = 1

// TS 배열
const tsArr: Array<number> = [1, 2, 3]
const heroes: Array<string> = ['Iron man', 'Thor']
const tsArrLiteral: number[] = [1, 2, 3]

// TS 튜플. 배열의 인덱스에 모두 타입이 정해져있다.
const address: [string, number] = ['gangname', 1]

// TS 객체
const obj: Object = {}
const person1: Object = {name: 'name', age: 1}
const person2: { name: string, age: any } = {name: "name", age: 1}

// TS 진위값
const show: boolean = true