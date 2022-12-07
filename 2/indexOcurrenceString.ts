function strStr(haystack: string, needle: string): number {
    let indexOcurrence = -1; //The frist ocurrence in the string variable called haystack
    let pajar = haystack.split('');
    let aguja = needle.split('');
    for(let i = 0; i < pajar.length; i ++){
        let aux:string = [...pajar].splice(i, aguja.length).join('');
        if (aux === needle && indexOcurrence === -1)
            indexOcurrence = i;
    }
    return indexOcurrence;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));





/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.


Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/