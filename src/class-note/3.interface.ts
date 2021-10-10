interface Person {
    readonly name: string;
    readonly age: number;
}

const person: Person = {
    name: "name",
    age: 10
}

interface Developer extends Person {
    languages: string[];
}

const developer: Developer = {
    name: 'joseph',
    age: 30,
    languages: ['kotlin', 'java', 'typescript']
}

interface IndexSignature {
    [key: string]: string | object | number
}

const indexSignature: IndexSignature = {
    key: 'value',
    key2: {},
    key3: 30
}