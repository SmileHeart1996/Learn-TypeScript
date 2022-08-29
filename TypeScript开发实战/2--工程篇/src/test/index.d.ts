export {};

declare global {
    // ts会做合并操作，合并原始Window接口对象和我们在global中定义的Window接口
    interface Window {
        test: string;
    }
    var jQuery: (selector: string) => any;
}