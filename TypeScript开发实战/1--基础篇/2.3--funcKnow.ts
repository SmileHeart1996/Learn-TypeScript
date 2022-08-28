// ts四种函数定义方式，后三种只是声明了函数规范，需要"="实装
// 基本的函数声明与实现
function sub1(x: number, y: number): number {
    return x - y;
}

// 先声明变量为函数类型，再定义
let sub2: (x: number, y: number) => number;
sub2 = (x, y) => x - y;

// type声明函数
type Sub3 = (x: number, y: number) => number;
let sub3: Sub3 = (x, y) => x - y;

// interface声明函数
interface Sub4 {
    (x: number, y: number): number;
}
let sub4: Sub4 = (x, y) => x - y;

// TS中的多种函数参数
// 可选参数
function sub5(x: number, y?: number) {
    return y ? x - y : x;
}
sub5(3);

// 默认参数
// 会被编译为一个if语句 "y === void 0"；void 0值为undefined
function sub6(x: number, y = 1, z: number, t = -1) {
    return x - y - z - t;
}
sub6(3, undefined, 4); // 传入undefined表示使用默认值

// 剩余参数；参数个数不确定的时候使用
function sub7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre - cur);
}
console.log(sub7(100, 2, 3, 4, 5));

// 函数重载；TS要求先定义一系列名称相同的函数声明，并在类型最宽泛的定义中实现重载
// 感觉用处相对较小，其实就是起到了一个动态约束作用
// 如果只写第三个函数的话，使用的时候参数和返回都是any；写了前两个，则会进行动态匹配(查询重载列表)。
function sub8(...rest: number[]): number;
function sub8(...rest: string[]): string;
function sub8(...rest: any[]): any {
    let first = rest[0];
    if(typeof first === 'string') {
        return rest.join('');
    } else {
        return rest.reduce((pre, cur) => pre - cur);
    }
}
console.log(sub8(100, 2, 3, 4, 5))
console.log(sub8('a', 'b', 'c'))