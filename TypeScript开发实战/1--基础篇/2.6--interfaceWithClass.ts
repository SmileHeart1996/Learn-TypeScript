// 类类型接口(其实只是被类用到，感觉不能怎么专门的说)：用接口约束类
interface Human {
    name: string;
    eat(): void;
}

// 类实现接口(必须实现接口声明的所有属性)
class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {}
    // private eat() {}; 只能用public实现接口
    // 也可以定义自己的属性，只要实现了接口所有属性就行(包含于关系)
    walk() {}
}

// 接口多继承；抽离出可重用接口，将多个接口合并成一个接口
interface Man extends Human{
    run(): void;
}
interface Child {
    cry(): void;
}
interface Boy extends Man, Child {}
let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
};

// 接口继承类：将类成员抽象出来(即只有结构声明，没有具体实现)
// 接口继承类会把私有和受保护的继承进来
// 但接口本身又没有访问修饰符(属性全为public)，导致想实例化该接口会报错(继承的是非public，但实现接口又只能用public实现)导致后续无法实例化。
// 虽然这是符合逻辑的，但却会导致问题；因此应该避免让接口继承类的非公有成员
// 这里可以使用Pick<XXX, keyof XXX>来实现，keyof只会列出公有的成员
class Auto {
    state = 1;
    private pri = 2;
}
// interface AutoInterface extends Auto {}  // 隐含state和pri属性
interface AutoInterface extends Pick<Auto, keyof Auto> {} // 利用pick keyof来只继承公有成员

// 变量和类的测试
let auto: AutoInterface = {
    state: 3,
}
class AutoTest implements AutoInterface {
    state = 2;
    private pri = 2;
}
// 子类也可以实现继承自父类的接口(很自由，但不知道有啥用，并且用起来稍有点绕)
// 因为它的父类Auto有这个属性，所以它不用重复定义
class Bus extends Auto implements AutoInterface {};