let aaaa = 4;
// 顶级导出会覆盖掉exports.xx，即便它在前面
module.exports = aaaa;

// 导出多个变量
exports.c = 3;
exports.d = 4;

