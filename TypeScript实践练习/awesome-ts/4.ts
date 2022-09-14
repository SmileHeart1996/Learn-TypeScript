interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

// typescript4.1新特性：支持使用as符号对键做重映射
// 利用as重映射和never会被忽略的效果来做值的条件选择
type ConditionalPick<T, U> = {
    [P in keyof T as T[P] extends U ? P : never]: T[P];
};

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;