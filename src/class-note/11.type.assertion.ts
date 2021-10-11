let a;
a = 20
a = 'a'

// 타입 단언
let b = a as string;

//<div id = "app">hi</div>

const div = document.querySelector('div')
if (div) {
    div.innerText = 'a'
}
const div2 = document.querySelector('div') as HTMLDivElement
div2.innerText = 'a'