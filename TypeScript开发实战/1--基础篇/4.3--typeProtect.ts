// 类型保护
// 方法一：instanceof
// 方法二：in
// 方法三：typeof
// 方法四：创建一个类型保护函数来判断类型

enum Type {Strong, Week};
class Java {
    helloJava() {
        console.log('Hello Java');
    }
    java: any;
}
class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript');
    }
    javascript: any;
}

// 类型保护函数
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).java !== undefined;
}

// 类型保护，解决泛用类型推断的问题
function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    // if((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // }

    // 方法一
    if(lang instanceof Java) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // 方法二
    if('java' in lang) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // 方法三
    if(typeof x === 'number') {
        x.toFixed(1);
    } else {
        x.length;
    }

    // 方法四
    if(isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }
}

getLanguage(Type.Strong, 305.32);