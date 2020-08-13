let count = 0;
count += 1;
// count = '갑자기 분위기 문자열';

const message: string = 'hello world';

const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// messages.push(1); // 숫자 입력 불가

let mightBeUndefined: string | undefined = undefined; // string이거나 undefined이기 때문에 가능
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; // 에러 발생