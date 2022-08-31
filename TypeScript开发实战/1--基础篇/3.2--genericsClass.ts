// 泛型类
class App<T> {
    // 注意：泛型不能应用于类的静态成员。为什么要这样设计呢？需要想想
    start(name: T) {
        console.log(`start ${name}`);
    }
}
let app1 = new App<string>();
app1.start('QQ');
let app2 = new App();  // 不穿<>参数，就是unknown类型没有约束
app2.start('Weixin');
app2.start(123);
app2.start(['123', 'QQ']);

// 泛型约束：顾名思义，就是给泛型加约束(比如下面就规定泛型必须有length属性)
interface Length {
    length: number;
    a?: string;
}
function genericsBind<T extends Length>(value: T): T{
    console.log(value, value.length);
    return value;
}
genericsBind([1, 2, 3]);
genericsBind("123");
genericsBind({length: 3});
// genericsBind({a: 1});  没有length属性，报错