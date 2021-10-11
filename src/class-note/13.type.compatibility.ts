// 타입 호환성 => 타입의 구조적인 관점에서의 호환이다. 자바, 코틀린, C# 에서 말하는 타입 호환과는 다르다.
// 구조적 타이핑이라 함.
// interface, class 등과 같은 것이 중요한 것이 아니라 그 내부를 구성하는 구조가 호환되야하는 것
interface Hero {
    name: string,
    skill: string
}

interface IronMan {
    name: string
}

let hero: Hero = {
    name: 'hero',
    skill: 'sikll'
}
let ironMan: IronMan = {
    name: 'ironMan'
}

// error!
// hero = ironMan

// ok
ironMan = hero

class Hero2 {
    name: string = 'name'
    skill: string = 'skill'
}

class IronMan2 {
    name: string = 'ironMan'
}

// error
// const hero2: Hero2 = new IronMan2()

// ok
const ironMan2: IronMan = new Hero2()


// 함수 타입 호환
let addFunc = function (a: number) {

}

let sumFunc = function (a: number, b: number) {

}

// ok
sumFunc = addFunc

// error
// addFunc = sumFunc

// generic 타입 호환
interface Empty<T> {

}

let empty1: Empty<string> = {}

let empty2: Empty<number> = {}
// ok 타입이 달라도 구조적으로 내용물이 동일
empty1 = empty2

// ok 타입이 달라도 구조적으로 내용물이 동일
empty2 = empty1


interface NotEmpty<T> {
    data: T
}

let notEmpty1: NotEmpty<string> = {data: 'data'}
let notEmpty2: NotEmpty<number> = {data: 1}

// error 구조적으로 data 의 타입이 달라지므로 허용 X
// notEmpty1 = notEmpty2

// error 구조적으로 data 의 타입이 달라지므로 허용 X
// notEmpty2 = notEmpty1

