const test1 = "test";
const test2 = undefined;

const result1 = test1 ?? null;
const result2 = test2 ?? '뒤에꺼';

console.log(result1);
console.log(result2);