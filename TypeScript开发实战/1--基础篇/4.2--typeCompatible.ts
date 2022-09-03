// 类型兼容性
// 结构兼容：成员少的兼容成员多的
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x: X = { a: 1, b: 2};
let y: Y = { a: 1, b:2, c:3 };
x = y;
y = x; //不兼容

// 函数兼容：参数多的兼容少的；参数类型要匹配；目标函数返回值类型必须与原函数相同或被其包含
type A = (a: string, b: number) => string;
type B = (a: string) => string;
let A1: A = (a: string) => a;  // 多兼容少
A1('a', 1);
let B1: B = (a, b) => a + b;  // 报错，少无法兼容多 
B1('a');

// 可选参数和剩余参数
// 固定参数可兼容可选参数和剩余参数
// 可选参数不兼容固定参数和剩余参数(默认配置，可通过strictFunctionTypes设置)
// 剩余参数可以兼容固定参数和可选参数
let aFunc = (p1: number, p2: number) => {};
let bFunc = (p1?: number, p2?: number) => {};
let cFunc = (...args: number[]) => {};
aFunc = bFunc;
aFunc = cFunc;
cFunc = bFunc;
cFunc = aFunc;