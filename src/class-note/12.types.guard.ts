interface Developer {
    name: string
    skill: string
}

interface Person2 {
    name: string,
    age: number
}

function introduce(): Developer | Person2 {
    return {name: 'name', skill: 'skill', age: 10}
}

const whoAmI = introduce();

if ((whoAmI as Developer).skill) {
    console.log((whoAmI as Developer).skill)
}

if ((whoAmI as Person2).age) {
    console.log((whoAmI as Person2).age)
}

// type guard
function isDeveloper(target: Developer | Person2): target is Developer {
    return (target as Developer).skill !== undefined
}

if (isDeveloper(whoAmI)) {
    console.log(whoAmI.skill)
} else {
    console.log(whoAmI.age)
}