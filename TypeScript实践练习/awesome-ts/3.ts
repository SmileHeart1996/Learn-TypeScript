type Flat<T> = {
    [P in keyof T]: T[P];
}

type SetOptional<T, U extends keyof T> = Flat<{
    [P in U]?: T[P];
} & Pick<T, Exclude<keyof T, U>>>;

type Foo = {
    a: number;
    b?: string;
    c: boolean;
}
type someOptional = SetOptional<Foo, 'a' | 'c'>
const test: someOptional = {};