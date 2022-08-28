interface List {
    readonly id: number;
    name: string;
    [index: string]: string | number;
}

interface Result {
    data: List[],
    status?: number;
    // 默认配置的索引签名的类型检查挺严格的，接口内其他字段都需要符合签名要求(undefined[?]啥的需要)
    [index: string]: number | undefined | List[];
}

function render(result: Result) {
    result.data.forEach(item => {
        // item.id = -1;
        console.log(item.id, item.name);
    });
}

const result: Result = {
    data: [
        // 上面接口不加索引签名的话，不显式用类型注解声明result: Result的话，加多余的属性ts类型检查不会报错，即只需要满足接口基本要求就可以作为参数传递
        // 加了的话会报错，因为多了个字段，不符合接口定义
        {id: 0, name: 'Alex Xie', sex: 'male', age: 18},
        {id: 1, name: 'Smile Heart'}
    ],
}

render(result);

// 数字可索引类型接口，类似于数组，它的变量支持数组赋值方式
interface StringArray {
    [index: number]: string;
}
let strArr1: StringArray = ['A', 'B'];
let strArr2: StringArray = {
    1: 'first',
    3: 'third',
    0: 'zero',
    // -1: 'err', 不能是负数
    1.1: 'ada' //可以是小数
};

// 字符串可索引类型接口
interface Names {
    [index: string]: string;
}
let names: Names = {
    // 1: 'Alex'也行，因为默认被视为'1'(默认类型转换)
    '1': 'Alex',
    test: 'Smile',
};

// 可混用；数字索引签名值需要和字符串索引签名值一致或是其子类型
// 这是因为js会进行默认类型转换，将number键转为string
interface Test {
    [x: string]: string | number;
    // [y: number]: undefined; 报错
    [y: number]: number;
}