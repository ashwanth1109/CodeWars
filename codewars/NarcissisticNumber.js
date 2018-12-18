//===========================================
// https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript
//
// Does my Number look big in this?
// 6 kyu
//===========================================

narcissistic = (n, pow = n.toString().length) => {
    const split = (n, arr1 = [], arr2 = [n % 10, ...arr1]) =>
        n > 9 ? split(Math.floor(n / 10), arr2) : arr2; // func to split n into its digits
    const narcSum = split(n).reduce((acc, cur) => acc + Math.pow(cur, pow), 0); // func to calc narcissistic sum
    return narcSum === n;
};

//===========================================
// TEST CASES
//===========================================
console.log(narcissistic(153));
