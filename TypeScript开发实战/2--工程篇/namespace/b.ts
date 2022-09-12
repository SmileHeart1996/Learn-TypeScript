/// <reference path="a.ts" />

namespace Shape {
    export function square(x: number) {
        return x * x;
    }
}

// 命名空间和模块不要混用，命名空间最好在全局环境下使用
console.log(Shape);
console.log(Shape.circle(1));
console.log(Shape.square(2));

// 别名 这里的import和模块的import没任何关系
import circle = Shape.circle;
console.log(circle);