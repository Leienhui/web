// 请使用递归输出斐波那契数列
function digui(m) {
    if (m == 1 || m == 2) return 1;
    return digui(m - 1) + digui(m - 2);
}