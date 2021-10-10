// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b
}

const number1 = sum(1, 2);

// 함수의 반환 값에 타입을 정의하는 방식
function getNumber(): number {
    return 10
}

// 위 두개의 결과로 도출되는 기본적인 함수의 최종 형태
function add(a: number, b: number): number {
    return a + b
}

// optional parameters
function log(message?: string) {
    console.log(message ?? "")
}

log()
log("aaa")