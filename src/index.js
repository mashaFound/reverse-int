module.exports = function reverse(n) {
    let numStr = n.toString();
    let reversedStr = '';
    for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    }
    return parseInt(reversedStr);
}
