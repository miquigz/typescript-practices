function isPalindrome(x: number): boolean {
    let arrStr = x.toString().split('');
    let arrStr2 = [...arrStr];
    arrStr2 = arrStr2.reverse();
    // console.log(arrStr);
    // console.log(arrStr2);
    return arrStr2.toString() == arrStr.toString();
};

console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));