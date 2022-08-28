// 普通类的定义
class Person {
    // ts中类所有属性默认为public，访问限制修饰符实际上只是用于编译前检查，它并不影响编译结果
    // 声明构造函数为protected表明该类不能实例化，只能被继承(默认public；声明为private无意义)
    // protected constructor(name: string) {
    constructor(name: string) {
        this.name = name;
    }
    private name: string;
    public walk() {}
    protected eat() {}
}

console.log(Person.prototype);
let person = new Person('Alex Xie');
console.log(person, person.walk());

// 继承
class Teacher extends Person {
    // 通过给构造函数参数加修饰符，来将参数直接声明为类的实例属性，简化类声明(但感觉这样不太直观)
    constructor(name: string, public subject: string) {
        super(name);
        this.subject = subject;
        this.eat(); // protected支持在子类中访问
        // this.name；private只能在自己类内访问
    }
    readonly sex: string = 'male';
    static profession: string = 'teacher';
    // subject: string;
    teach() {}
}

let teacher = new Teacher('Martin Lin', 'Math');
console.log(teacher.sex);
teacher.subject = 'English';
console.log(Teacher.profession);
// teacher.sex = 'female';