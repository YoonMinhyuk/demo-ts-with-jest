// function logText(text: any): any {
//     console.log(text)
//     return text
// }
//
// logText(10) // return 10
// logText('hi') // return 'hi'
// logText(true) //return true

function logText<T>(text: T): T {
    console.log(text)
    return text
}

logText<number>(10)
logText<string>('hi')
logText(true)

class Generic<T> {
    private value: T

    constructor(value: T) {
        this.value = value
    }

    public getValue(): T {
        return this.value
    }

    public changeValue(value: T) {
        this.value = value
    }
}

const generic = new Generic<string>('');
console.log(generic.getValue())
generic.changeValue('hehe')

interface GenericInterface<T> {
    getName(): T
}

class GenericInterfaceImpl implements GenericInterface<string> {
    getName(): string {
        return 'hehe';
    }
}

console.log(new GenericInterfaceImpl().getName())

