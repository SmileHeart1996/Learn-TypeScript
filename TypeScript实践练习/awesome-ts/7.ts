type EmptyObject = {
    // type PropertyKey = string | number | symbol
    [k in PropertyKey]: never;
};

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
  prop: "TS"
}

type SomeType =  {
    prop: string
}

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
// 通过映射参数特有键为never类型来实现严格约束(任何类型都不能赋值给never，所以编译会报错)
type Exclusive<T1, T2 extends T1> = {
    [k in keyof T2]: k extends keyof T1 ? T1[k] : never;
}

function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) { return x }

// 测试用例：
const x = { prop: 1 };
takeSomeTypeOnly(x) // 可以正常调用

const y = { prop: 'a', addditionalProp: 'x' };
takeSomeTypeOnly(y) // 将出现编译错误