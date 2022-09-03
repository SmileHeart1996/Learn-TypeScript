// 交叉类型：可以做对象混入
interface DogI {
    run(): void;
}
interface CatI {
    jump(): void;
}
let pet: DogI & CatI = {
    run() {},
    jump() {},
};

// 联合类型：为类型添加一定不确定性
let a: number | string = 1;
let b: 'a' | 'b' = 'a';

class DogC implements DogI {
    run() {}
    eat() {}
}
class CatC implements CatI {
    jump() {}
    eat() {}
}

enum Master {Boy, Girl};
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogC() : new CatC();
    pet.eat();
    pet.jump();  // 报错 只能访问所有类成员的交集
    return pet;
}

// 联合类型的类型保护：利用公共属性
interface Square {
    kind: 'square',
    size: number,
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    r: number,
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch(s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        // case 'circle':
        //     return 2 * Math.PI * s.r;
        default: // 利用never来避免缺少分支判断
            return ((e: never) => {throw new Error(e)})(s);
    }
}

const square: Square = {
    kind: 'square',
    size: 3,
}
console.log(area(square));