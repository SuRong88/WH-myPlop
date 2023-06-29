/*
 * @Author: sam.li
 * @Date: 2021-05-17 14:48:55
 * @LastEditors: sam.li
 * @LastEditTime: 2021-08-10 17:09:55
 */
function isEmpty(errorText) {
    return (val) => {
        if (val === '') return `${errorText}-不能为空`
        return true
    }
}

function titleCase(str) {
    //把字符串根据空格转换成字符数组
    let arr = str.split('-');
    //遍历字符数组
    for(let i = 0;i < arr.length;i++){
        //把第一个字符变为大写,其余字符变为小写
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    //加上空格，返回原模式的字符串
    return arr.join('');
    
}

module.exports = {
    isEmpty,
    titleCase
}