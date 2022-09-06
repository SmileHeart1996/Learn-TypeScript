import { a, b, c } from './a';   // 批量导入
import { P } from './a';         // 导入接口
import { f as F } from './a';    // 导入时起别名
import * as All from './a';      // 导入模块中的所有成员，绑定在All对象上
import myFunction from './a';    // 不加{}，导入default内容

console.log(a, b, c);

const p: P = {
    x: 1,
    y: 1,
};

F();

console.log(All);

myFunction();