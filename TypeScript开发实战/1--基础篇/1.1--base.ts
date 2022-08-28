// 原始类型
let bool: boolean = true;
let num: number = 666;
let str: string = 'test';

// 数组类型
let arr: string[] = ['12', 'tt'];
let arr0: string[] | number[] = [1, 2, 444];
let arr1: (string | number)[] = [1, 'vacation', 'test' ,'123'];
let arr2: Array<number | string> = [1, 2, 3, 'test'];    // 使用ts内置定义的Array<T>泛型接口来声明数组

// 元组
let tuple: [string, boolean, number[], string?] = ['123', true, [1, 2, 3]]

// 函数
let addPrefix = (prefix: string, value: number): string => prefix + value;
// 下面写法把声明和定义分开，但感觉一般用不到，一般都一起写或者不写函数的类型注解吧(一般都是上面的写法)
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
let obj: {value: number, suffix?: string} = {value: 1};
obj.suffix = '嘿嘿';

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();

// undefined, null 这两种类型只能赋值为本身
let un: undefined = undefined;
let nu: null = null;
// num = undefined; 报错，ts默认无法将undefined和null赋值给其他类型
// 但可以通过修改ts配置文件strictNullChecks来允许赋值

// void
let noReturn = () => {};

// any
let a;

// never 表示永远不会有返回值
let error = () => {
    throw new Error('erro');
}
// 一个神奇的设计while(1)是 () => void 而不是 () => never；需要while(true)才是。
let endless = (): never => {
    while(true) {}
}