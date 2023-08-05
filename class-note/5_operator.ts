// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 하나의 타입 이상을 쓸 수 있게 해주는 Union type
function logMessage(value: string | number) {
    console.log(value);
}
logMessage('hello');
logMessage(100);