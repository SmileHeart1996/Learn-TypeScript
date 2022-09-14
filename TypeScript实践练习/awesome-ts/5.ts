type Fn = (a: number, b: string) => number

// typescript是类型体操，不是值体操，不要搞混了；泛型是类型；
// 把TS当成一门语法，只不过和强类型语法不同的是，它的类型声明在变量后面，并且它支持很复杂的类型声明、定义和别名设置
type AppendArgument1<F extends (...args: any) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F>;
type AppendArgument2<F, A> = F extends (...args: infer Args) => infer Return ? (x: A, ...args: Args) => Return : never;

type FinalFn1 = AppendArgument1<Fn, boolean>
type FinalFn2 = AppendArgument2<Fn, string>