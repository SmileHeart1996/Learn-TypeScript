// 定义函数变量
let add: (x: number, y:number) => number;

// 定义函数接口，和上面等价。感觉一般都是用对象接口，函数接口用的比较少
interface Add1 {
    (x: number, y:number): number;
}
// 声明变量为这个函数接口类型，则会自动推断参数
let add1: Add1 = (x, y: number) => {
    console.log(x, y);
    return x + y;
}

// 使用类型别名(type)定义函数，其实也和上面等价(类型别名和接口编译后都会被移除)
type Add2 = (x: number, y: number) => number;
let add2: Add2 = (x, y) => x + y;

// 混合类型接口；一般不这样写
interface Lib {
    (): void;  // 无名函数定义了该接口是函数类型
    version: string;
    doSomeThing(): void;
}

// let lib: Lib = () => {}; 会报错，因为声明的时候里面的属性没声明完全
// 用类型断言可以解决，不过实际上一般不会这样写接口，要么就是一个函数类型，没有其他的属性；要么就写个对象接口
let lib: Lib = (() => {}) as Lib;
lib.version = '123';
lib.doSomeThing = () => {};