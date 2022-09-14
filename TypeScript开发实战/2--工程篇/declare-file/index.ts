import $ from 'jquery';

// 三种，源码自带声明文件；放到@types里；没有，自己写；
console.log($);

globalLib({x: 1});

// 给类库添加一些自定义方法需要添加的声明
import m from 'moment';

// 模块化插件声明
declare module 'moment'{
    export function myFunction(): void;
}
m.myFunction = () => {};

// 全局插件声明
declare global {
    namespace globalLib {
        function doAnyThing(): void;
    }
}
globalLib.doAnyThing = () => {};

// 声明文件依赖
// 在package.json中写明types字段指定入口声明文件，在入口声明文件中用三斜线reference引入其他声明文件
// reference path属性为在本目录下寻找声明，若使用types属性则为去@types里寻找声明
