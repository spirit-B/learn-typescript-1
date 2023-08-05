interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 15,
    name: "세호"
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}
// obj['cssfile'] = 'a';

Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

let captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴'
}