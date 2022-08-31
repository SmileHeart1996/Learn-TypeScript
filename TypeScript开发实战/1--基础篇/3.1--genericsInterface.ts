// 泛型函数
// 保证输入参数和返回值一致
function log<T>(value: T): T{
    console.log(value);
    return value;
}
log<string[]>(['a', 'b', 'c', 'd', 'e', 'f']);
log<number>(123);
log(true) // ts类型推断

// 定义泛型函数类型(声明)
type Log = <T>(value: T) => T;
let myLog1: Log = <T>(value: T) => value; //实现一个泛型函数
let myLog2: Log = log;

// 泛型函数接口
interface ILog1 { // 等价于上述类型别名
    <T>(value: T): T;
};
let ilog1: ILog1 = <T>(value: T) => {
    return value;
};

interface ILog2<T> {
    (value: T): T;
}
let ilog2: ILog2<string> = (value: string) => {
    return value;
}
ilog2 = log;

// 泛型对象接口
interface GenericsInterface1<T = number> {
    // (value: T): T;
    name?: T | undefined;
    id: number;
    [index: string]: T | number | undefined;
}
let gInterface1: GenericsInterface1<string> = {
    id: 123,
    name: 'xie kang',
    age: undefined,
};
let gInterface2: GenericsInterface1 = {
    id: 123,
    name: 233,
    age: undefined,
};