//===========================================
// https://www.codewars.com/kata/58223370aef9fc03fd000071
//
// Dashatize It
// 6 kyu
//===========================================

dashatize = num => {
    const splitNum = (num, numArr = [], modArr = [num % 10, ...numArr]) =>
        num > 9 ? splitNum(Math.floor(num / 10), modArr) : modArr;
    const numArr = splitNum(num);
    const isEven = n => (n % 2 === 0 ? true : false);
    return numArr.reduce((acc, cur, id, src) => {
        if (isEven(cur)) {
            return acc + cur;
        } else {
            if (id === 0) {
                return acc + cur + "-";
            } else if (id === src.length - 1) {
                return isEven(src[src.length - 2])
                    ? acc + "-" + cur
                    : acc + cur;
            } else {
            }
        }
    }, "");
};

//===========================================
// TEST CASES
//===========================================
console.log(dashatize(274));
console.log(dashatize(6815));
