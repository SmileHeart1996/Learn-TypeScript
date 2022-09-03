// 条件类型  T extends U ? X : Y
type TypeName<T> = T extends string ? "string" : "number";
type T1 = TypeName<boolean>;

// 分布式条件类型：(A | B) extends U ? X : Y
// 等价于：(A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>;

// 使用该特性实现类型过滤 Diff官方实现Exclude<T, U>
type Diff<T, U> = T extends U ? never : T;
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'b' | 'e'>;

// NotNull 官方实现 NonNullable<T>
type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>;

// Extract<T, U> 和Diff相反
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'c' | 'e'>

// ReturnType<T> 获取函数返回值类型
// infer：表示延迟推断，取传进来的值
type T7 = ReturnType<() => string>;