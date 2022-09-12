// 接口合并：非函数成员，类型必须一致；
// 函数成员，被视为函数重载
interface A {
    x: number;
    // y: string; 类型冲突；报错
    foo(bar : number): number;
}

interface A {
    y: number;
    foo(bar : string): string;
    foo(bar : number[]): number[];
}

// 同名接口合并了
let a: A =  {
    x: 1,
    y: 2,
    // 实现，必须为包容所有重载的函数
    foo(x: any) {
        return x;
    }
};

// 命名空间和函数的合并
function Lib() {

}
namespace Lib {
    export let version = '1.0';
}
console.log(Lib.version);

// 命名空间和类的合并
class C {}
namespace C {
    export let state = 1;
}

console.log(C.state);

// 命名空间和枚举的合并
enum Color {
    Red,
    Yellow,
}
namespace Color {
    export function mix() {}
}
console.log(Color);