// any type
let a;

// number type
let b = 10;

// string type
let c = 'abc';

// return type & a parameter type is number
function getSomething(a = 10) {
    return a
}

interface DropDown<T> {
    value: T
    title: string
}

// value type is string
const dropDownItem: DropDown<string> = {
    value: 'a',
    title: 'title'
}

interface DetailedDropDown<T> extends DropDown<T> {
    description: string,
    tag: T
}

// DetailedDropDown.tag type is string and DropDown.value type is string
const detailedDropDownItem: DetailedDropDown<string> = {
    value: '',
    title: '',
    description: '',
    tag: ''
}

// Best Common Type
const arr = [1, 2, 3, true, 'a']

