// 索引类型
let obj1 = {
    a: 1,
    b: 2,
    c: 3,
}
function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key]);
}
console.log(getValues(obj1, ['a', 'b']));
console.log(getValues(obj1, ['e']));  // 没有该key不会报错

// keyof T：T类型的所有公有属性的联合类型
interface Obj {
    a: number,
    b: string,
}
let key1: keyof Obj = 'a';
let key2: keyof Obj = 'c'; //报错，没有这个键

// 索引访问操作符：T[K]。声明某变量的类型为T[K]值的类型
let value: Obj['a'] = 3;

// 泛型约束 T extends U
// 改造上面的getValues，约束它当传入不存在的键时候报错
// 下面两个函数都可以,第三种写法可能好点
function getValues2<T>(obj: T, keys: (keyof T)[]) {
    return keys.map(key => obj[key]);
}
console.log(getValues2(obj1, ['a', 'b']));
console.log(getValues2(obj1, ['e']));

function getValues3<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}
console.log(getValues3(obj1, ['a', 'b']));
console.log(getValues3(obj1, ['e']));