// 对于数组来说，T[number]表示其所有元素的联合类型
// 非递归(只能铺平二维数组)
type NaiveFlat1<T extends any[]> = {
    [P in keyof T]: T[P] extends any[] ? T[P][number] : T[P];
}[number]
// 递归(可以铺平任意维数组)
type NaiveFlat2<T extends any[]> = {
    [P in keyof T]: T[P] extends any[] ? NaiveFlat2<T[P]> : T[P];
}[number]

// NaiveResult的结果： "a" | "b" | "c" | "d"
// 测试用例：
type NaiveResult1 = NaiveFlat1<[['a', ['c']], ['b', 'c'], ['d']]>
type NaiveResult2 = NaiveFlat2<[['a', ['c']], ['b', 'c'], ['d']]>