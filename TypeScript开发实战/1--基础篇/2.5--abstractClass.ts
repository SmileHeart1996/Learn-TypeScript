// 抽象类；抽离出共性类，有利于代码复用
// (PS: 感觉现在的一个观点是组合优于继承，Vue3也是函数式语法)
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void; // 抽象方法，子类必须实现
}
// const animal = new Animal(); 抽象类无法创建实例

class Dog extends Animal{
    constructor(public name: string) {
        super();
        this.name = name;
    }
    run() {}
    sleep() {
        console.log('dog sleep!');
    }
}
const dog = new Dog('Gray');
dog.eat();
dog.sleep();

class Cat extends Animal {
    sleep() {
        console.log('cat sleep!');
    }
}
let cat = new Cat();

// 多态，父类数组变量存子类对象，调用方法通过判断元素具体是哪个子类的实例，来实现多态
let animals: Animal[] = [dog, cat];
animals.forEach(item => {
    item.sleep();
})

// 用this实现链式调用
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2();