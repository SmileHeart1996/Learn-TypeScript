global.country = 'China';
console.log(global.country);
console.log(country);
global.multiply = function (a, b) {
    return a * b;
};
console.log(global.multiply(16, 30));
console.log(multiply(13, 10));
// 如果是在浏览器中运行代码
