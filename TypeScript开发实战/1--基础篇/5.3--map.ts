// 映射类型
interface MObj {
    a: string,
    b: number,
    c: boolean,
}

// TS内置的泛型接口，将传入的对象映射为只读对象
type ReadOnlyObj = Readonly<MObj>;
let mObj: ReadOnlyObj = {
    a: '1',
    b: 2,
    c: true,
};

// 属性变可选
type PartialObj = Partial<MObj>;

// 抽子集
type PickObj = Pick<MObj, 'a' | 'b'>;

// 创建新属性
type RecordObj = Record<'x' | 'y', string>;

// 内置的泛型类型
// type Readonly1<T> = {
//     readonly [P in keyof T]: T[P];
// };

// 映射为全私有
// 为什么这里面属性不能带private public等修饰符？
type Reverse<T, K extends keyof T> = {
    [P in K]: T[P];
};
type test12 = Reverse<MObj, keyof MObj>;
