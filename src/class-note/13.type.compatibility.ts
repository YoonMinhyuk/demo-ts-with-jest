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
const ironMan2 : IronMan = new Hero2()

