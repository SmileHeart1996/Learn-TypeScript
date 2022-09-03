// 类型推断
// 基础类型推断
let a1 = 1;  // 推断 number
let a2 = []; // 推断 any[]
let a3 = ['s', 't'];  // 推断 string[]
let c = (x = 1) => x + 1 // 推断 (x?: number) => number

// 最佳通用类型推断
let b1 = [1, '1']; // (number | string)[]

// 上下文类型推断
// 根据window.onkeydown 推断event参数为KeyboardEvent类型
window.onkeydown = (event) => {
    console.log(event.DOM_KEY_LOCATION_LEFT); // 推断了，所以有提示
}

// 类型断言(不能乱用)
interface Foo {
    bar: number;
}
let foo = {};
// let foo = {} as Foo;  // 类型断言
foo.bar = 1; // 默认报错，空对象无该属性；需要对foo使用类型断言