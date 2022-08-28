// 数字枚举；会被编译为带双向键值映射的对象
enum Game {
    EuropeV,  // 0；默认第一个名字代表常量0，后续递增(自定义则从自定义开始递增)
    Hoi4 = 3,  // 前面的还是从0开始，后面的从3递增(4,5..)
    Civilization,
    TotalWarII,
}

// 字符串枚举；只会被编译为键到值的单向映射对象
enum Message {
    Success = '成功!',
    Pending = '正在运行中...',
    Error = '错误!'
}

// 异构枚举；一般不这样写，容易混淆
enum Answer {
    N,  // 0
    Y = 'Yes'
}

// 枚举成员；常量，定义后无法修改
enum Char {
    a,
    b = Char.a,
    c = 1 + 2,
    d = Math.random(),
    e = '123'.length,
}

// 常量枚举；编译阶段会移除，适合不需要枚举对象，只需要枚举值的情况
// 我感觉大部分时候都用这个比较好，一般枚举本身就是为了增强可读性，运行时也用不到枚举对象
const enum Month {
    Jan,
    Feb,
    Mar,
}
let month = Month.Jan; // let month = 0;

// 枚举类型
enum Test1 {a, b}
enum Test2 {a, b = 3}
enum Test3 {a, b = 'heihei'}
enum Test4 {a = '123', b = '456'}
const enum Test5 {a = '123', b = '456'}

let t1: Test1 = 3;  // 数字(包含数字的异构)枚举的枚举类型变量，可以是任意number(可超出枚举定义)
let ta1: Test1.b = 555; // 可以超出(不能变类型，比如变字符串就不行)
let t4: Test4 = Test4.b; // 字符串枚举变量取值只能是成员的值
let t4a: Test4.a = Test4.a;
let t5: Test5 = Test5.a;
let t5a: Test5.b = Test5.b;
// 这里测了下，有个有意思的点；数字枚举类型的变量编译后就是数字，而字符串枚举类型变量分两种情况
// 非常量枚举类型(Test4)，变量编译后值为对象属性(t4 = Test4.b)
// 常量枚举类型(Test5)，变量编译后值为字符串(t5 = '123')
// 这种编译区别就是为啥字符串枚举不能乱赋值的原因了，虽然不知道为啥ts要这样设计？