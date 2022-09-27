declare function func(a: number, b: number): number;
declare type tFunc = (a: number) => number;

// 只要顶层作用域没有import export，dts就被视为全局声明文件
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

// 写了下面的import，该dts就被视为模块声明文件，不会被全局引入
// import Vue from 'vue';